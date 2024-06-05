import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/user/entities/user.entity';
@Entity()
export class Bid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  bid_amount: number;

  @Column({
    default: () => `CURRENT_TIMESTAMP`,
  })
  created_at: Date;

  @ManyToOne(() => Item, (item) => item.id) // Many Bids to One Item
  item: Item;

  @ManyToOne(() => User, (user) => user.id) // Many Bids to One User
  user: User;
}
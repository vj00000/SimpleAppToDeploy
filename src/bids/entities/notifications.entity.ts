import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  message: string;

  @Column({ default: false })
  is_read: boolean;

  @Column({
    default: () => `CURRENT_TIMESTAMP`,
  })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.id) // Many Notifications to One User
  user: User;
}
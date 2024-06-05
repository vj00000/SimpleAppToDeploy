import { Entity, PrimaryGeneratedColumn, Column, 
  // Default,
   BeforeInsert } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'decimal', nullable: false })
  starting_price: number;

  @Column({ type: 'decimal', default: () => 'CURRENT_TIMESTAMP' })
  current_price: number;

  @Column({ nullable: true })
  image_url: string;

  @Column({ nullable: false })
  end_time: Date;

  @Column({
    default: () => `CURRENT_TIMESTAMP`,
  })
  created_at: Date;
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column({ type: "decimal",nullable:true })
  currentPrice: number;

  @Column({ nullable: true })
  image_url?: string;

  @Column({ type: "timestamp", nullable: true })
  endTime: Date;

  @Column({ type: "timestamp", nullable:true})
  createdAt: Date;

  // @Column({ type: 'timestamp', nullable: false })
  // end_time: Date;
}

// import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

// @Entity()
// export class Item {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ nullable: false })
//   name: string;

//   @Column({ type: 'text', nullable: false })
//   description: string;

//   @Column({ type: 'decimal', nullable: false })
//   starting_price: number;

//   @Column({ type: 'decimal', default: () => 50 })
//   current_price: number;

//   @Column({ nullable: true })
//   image_url: string;

//   @Column({ type: 'timestamp', nullable: false })
//   end_time: Date;

//   @Column({
//     type: 'timestamp',
//     default: () => `CURRENT_TIMESTAMP`,
//   })
//   created_at: Date;

//   @BeforeInsert()
//   setStartingPriceAsCurrentPrice() {
//     this.current_price = this.starting_price;
//   }
// }
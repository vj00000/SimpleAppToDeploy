import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, 
  // Default,
   OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { userRole } from '../user-role.enum';
// import { Exclude } from 'class-validator';
// import {Exclude} from 'class-validator'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({ nullable: false })
  // @Exclude() // Exclude password from response data
  password: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ default: 'user' })
  // role: userRole;
  role:string;

  @Column({
    default: () => `CURRENT_TIMESTAMP`,
  })
  created_at: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10); // Adjust salt rounds as needed
  }

  // @OneToMany(() => /* Your other entity class */, (entity) => entity.user) // Replace with your entity class name
  // otherEntity: any; // Replace with the type of your other entity relationship
}
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100,
  })
  name!: string;

  @Column({
    length: 100,
  })
  lastName!: string;

  @Column({ nullable: true, default: false })
  process!: boolean;

}

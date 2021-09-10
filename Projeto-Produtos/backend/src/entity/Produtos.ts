import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Produtos{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    description: string;

    @Column()
    preco: number;

    @Column()
    dtVencimento: Date

    @Column({
        default: false
    })
    vendido: boolean;

    @CreateDateColumn()
    dtEntrada: Date;

    @UpdateDateColumn()
    dtSaida: Date;
}
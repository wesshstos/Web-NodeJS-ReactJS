import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, } from 'typeorm';

@Entity()
export class Alunos{
    
    @PrimaryColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    ra: string;

    @Column()
    dtNascimento: string;

    @Column()
    idadeAluno: number;

    @Column()
    cep: string;

    @Column()
    endereco: string;

    @Column({
        default: false
    })
    matriculado: boolean;

    @CreateDateColumn()
    cadastro: Date;

    @UpdateDateColumn()
    matricula: Date;


}
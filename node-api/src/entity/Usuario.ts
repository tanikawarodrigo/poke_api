import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity("usuarios")
export class Usuario {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    last_name: string;

    @Column({unique: true,})
    email: string;

    @Column()
    senha: string;
    

}

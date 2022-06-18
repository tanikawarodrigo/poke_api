import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity("pokemons")
export class Pokemon {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({unique: true})
    nome: string;

    @Column()
    descricao: string;

    @Column()
    categoria: string;

    @Column()
    habilidade:string;

    @Column()
    image:string;
}

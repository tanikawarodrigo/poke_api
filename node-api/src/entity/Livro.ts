import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity("livros")
export class Livro {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({unique: true,})
    titulo: string;

    @Column()
    descricao: string;

    @Column()
    data_lancamento: string;

    @Column()
    image: string;
    nullable: true;
    
}

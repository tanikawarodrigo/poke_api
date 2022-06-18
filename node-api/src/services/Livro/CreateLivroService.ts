import { AppDataSource } from "../../data-source"
import { Livro } from "../../entity/Livro";

type UsuarioRequest = {
    titulo: string;
    descricao: string;
    data_lancamento: string;
    image: string;
}

export class CreateLivroService {
    async execute ({ titulo,descricao,data_lancamento,image}: UsuarioRequest): Promise < Livro | Error>{
        const repo = AppDataSource.getRepository(Livro);
        if ( await repo.findOneBy({titulo})) return new Error("Livro já cadastrado"); 
        const livro = repo.create ({ 
            titulo: titulo,
            descricao: descricao,
            data_lancamento: data_lancamento,
            image: image
         })
        await repo.save(livro);

        return livro
    }
}
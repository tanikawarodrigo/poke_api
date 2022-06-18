import { AppDataSource } from "../../data-source"
import { Livro } from "../../entity/Livro"

type UsuarioRequest = {
    id: number
    titulo: string;
    descricao: string;
    data_lancamento: string;
}

export class UpdateLivroService {
    async execute ({id ,titulo,descricao,data_lancamento }: UsuarioRequest): Promise < Livro | Error>{
        const repo = AppDataSource.getRepository(Livro);
        const livro = await repo.findOneBy({id: id});
        if (!livro) return new Error("Livro nao existe"); 
        
        livro.titulo = titulo ? titulo : livro.titulo;
        
        livro.descricao = descricao ? descricao : livro.descricao;

        livro.data_lancamento = data_lancamento ? data_lancamento : livro.data_lancamento;
        
        await repo.save(livro);

        return livro
    }
}
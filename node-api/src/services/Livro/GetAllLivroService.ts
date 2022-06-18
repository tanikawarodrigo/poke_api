import { AppDataSource } from "../../data-source"
import { Livro } from "../../entity/Livro"

export class GetAllLivroService {
    async execute(){
        const repo = AppDataSource.getRepository(Livro);
        const livros = await repo.find();
        
         return livros
    }
}
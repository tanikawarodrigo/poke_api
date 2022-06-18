
import { AppDataSource } from "../../data-source"
import { Livro } from "../../entity/Livro"



export class DeleteLivroService {
    async execute ( id:number ){
        const repo = AppDataSource.getRepository(Livro);
        if (!(await repo.findOneBy({id}))) return new Error("Livro para delecao, nao existe na base de dados")

         await repo.delete(id);
    }
}
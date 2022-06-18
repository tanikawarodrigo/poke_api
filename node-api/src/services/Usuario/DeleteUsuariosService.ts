
import { AppDataSource } from "../../data-source"
import { Usuario } from "../../entity/Usuario"



export class DeleteUsuarioService {
    async execute ( id:number ){
        const repo = AppDataSource.getRepository(Usuario);
        // const usuarios = await repo.find();
        if (!(await repo.findOneBy({id}))) return new Error("Usuario para delecao, nao existe na base de dados")

         await repo.delete(id);
    }
}
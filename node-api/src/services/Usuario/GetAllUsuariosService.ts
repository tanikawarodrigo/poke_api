import { AppDataSource } from "../../data-source"
import { Usuario } from "../../entity/Usuario"

export class GetAllUsuarioService {
    async execute(){
        const repo = AppDataSource.getRepository(Usuario);
        const usuarios = await repo.find();
        
         return usuarios
    }
}
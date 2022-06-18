import { AppDataSource } from "../../data-source"
import { Usuario } from "../../entity/Usuario"

type UsuarioRequest = {
    id: number;
}

export class GetOneUsuarioService {
    async execute ({ id }: UsuarioRequest): Promise < Usuario | Error>{
        const repo = AppDataSource.getRepository(Usuario);
        const usuarioId = await repo.findOneBy({id:id });
        if (!usuarioId) return new Error("Usuario nao encontrado"); 
        
        return usuarioId
    }
}

type UsuarioEmailRequest= {
    email: string;
}

export class GetOneEmailService{
    async execute ({ email }: UsuarioEmailRequest): Promise < Usuario | Error>{
        const repo = AppDataSource.getRepository(Usuario);
        const usuario = await repo.findOneBy({email:email });
        if (!usuario) return new Error("Usuario nao encontrado"); 
        return usuario
    }
}
import { AppDataSource } from "../../data-source"
import { Usuario } from "../../entity/Usuario"

type UsuarioRequest = {
    id: number;
    name: string;
    last_name: string;
    senha: string;
    email: string;
}

export class UpdateUsuarioService {
    async execute ({ id,name,last_name,senha,email }: UsuarioRequest): Promise < Usuario | Error>{
        const repo = AppDataSource.getRepository(Usuario);
        const usuario = await repo.findOneBy({id: id});
        if (!usuario) return new Error("Usuario nao existe"); 
        
        usuario.name = name ? name : usuario.name;
        
        usuario.email = email ? email : usuario.email;

        usuario.senha = senha ? senha : usuario.senha;
        
        usuario.last_name = last_name ? last_name : usuario.last_name;
        
        await repo.save(usuario);

        return usuario
    }
}
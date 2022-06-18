
import { AppDataSource } from "../../data-source"
import { Usuario } from "../../entity/Usuario"
import  bcrypt, { hash } from 'bcrypt';

type UsuarioRequest = {
    email: string;
    senha: string;
}


export class LoginService {
    async execute ({ email, senha }: UsuarioRequest): Promise < Usuario | Error>{
        const repo = AppDataSource.getRepository(Usuario);
        const usuario = await repo.findOneBy({email: email});
        if (usuario===null)return new Error("Email ou senha incorretos");  
        if(await bcrypt.compare(senha, usuario.senha)) return usuario
        return new Error("Email ou senha incorretos");
    }
}
import { AppDataSource } from "../../data-source"
import { Usuario } from "../../entity/Usuario"
import  bcrypt from 'bcrypt';
type UsuarioRequest = {
    name: string;
    last_name: string;
    senha: string;
    email: string;
}

export class CreateUsuarioService {
    async execute ({ name,last_name,senha,email }: UsuarioRequest): Promise < Usuario | Error>{
        const repo = AppDataSource.getRepository(Usuario);
        // const usuarios = await repo.find();
        // const usuarioId = await repo.findOneBy({email: email});
        if ( await repo.findOneBy({email})) return new Error("Email já cadastrado"); 
        
        const senhaEncriptada =  await bcrypt.hashSync(senha, 10);
        const usuario = repo.create ({ 
            name: name,
            last_name: last_name,
            senha: senhaEncriptada,
            email: email
         })
        await repo.save(usuario);

        return usuario
    }
}
import { AppDataSource } from "../../data-source"
import { Pokemon } from "../../entity/Pokemon";
type UsuarioRequest = {
    nome: string;
    descricao:string;
    categoria: string;
    habilidade: string;
    image:string;
}

export class CreatePokemonService {
    async execute ({ nome,descricao,categoria,habilidade, image}: UsuarioRequest): Promise < Pokemon | Error>{
        const repo = AppDataSource.getRepository(Pokemon);
        if ( await repo.findOneBy({nome})) return new Error("Pokemon já foi capturado!"); 
        const pokemon = repo.create ({ 
            nome: nome,
            descricao: descricao,
            categoria: categoria,
            habilidade: habilidade,
            image:image,
         })
        await repo.save(pokemon);

        return pokemon
    }
}
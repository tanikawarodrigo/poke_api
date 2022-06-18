import { AppDataSource } from "../../data-source"
import { Pokemon } from "../../entity/Pokemon";

type UsuarioRequest = {
    id: number;
}

export class GetOnePokemonService {
    async execute ({ id }: UsuarioRequest): Promise < Pokemon | Error>{
        const repo = AppDataSource.getRepository(Pokemon);
        const pokeId = await repo.findOneBy({id:id });
        if (!pokeId) return new Error("Pokemon nao encontrado"); 
        
        return pokeId
    }
}

type UsuarioEmailRequest= {
    nome: string;
}

export class GetOneNomeService{
    async execute ({ nome }: UsuarioEmailRequest): Promise < Pokemon | Error>{
        const repo = AppDataSource.getRepository(Pokemon);
        const pokemon = await repo.findOneBy({nome:nome });
        if (!pokemon) return new Error("pokemon nao encontrado"); 
        return pokemon
    }
}
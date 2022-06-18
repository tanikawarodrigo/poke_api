import { AppDataSource } from "../../data-source"
import { Pokemon } from "../../entity/Pokemon";


export class GetAllPokemonService {
    async execute(){
        const repo = AppDataSource.getRepository(Pokemon);
        const pokemons = await repo.find();
        
         return pokemons
    }
}
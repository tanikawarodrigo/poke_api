import { Request, Response} from "express"
import { GetAllPokemonService } from "../../services/Pokemon/GetAllPokemonService"

export class GetAllPokemonController{
    async handle(req:Request, res:Response){
        const service = new GetAllPokemonService();
        const pokemons = await service.execute(); 
        
        return res.json(pokemons);
    }
}
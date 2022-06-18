import { DeletePokemonService } from "../../services/Pokemon/DeletePokemonService";
import { Request, Response} from "express"

export class DeletePokemonController{
    async handle(req:Request, res:Response){
        const service = new DeletePokemonService();
        const { id } = req.params;
        const result = await service.execute(id);
        if(result instanceof Error) return res.status(400).json(res.message)
        return res.status(204).end()
    }
}
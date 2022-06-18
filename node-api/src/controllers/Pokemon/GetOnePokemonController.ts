import { GetOnePokemonService } from "../../services/Pokemon/GetOnePokemonService";
import { Request, Response } from "express"

export class GetOnePokemonController {
    async handle(req: Request, res: Response){
        const { id } = req.body;
        const service = new GetOnePokemonService();

        const result = await service.execute({id});
        if(result instanceof Error) return res.status(400).json(result.message)
        return res.json(result);
    }
}
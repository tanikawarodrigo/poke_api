import { Request, Response } from "express";
import { UpdatePokemonService } from "../../services/Pokemon/UpdatePokemonService"


export class UpdatePokemonController{
    async handle(req:Request, res:Response){
        
        const { id } = req.params;
        const { nome } = req.body;
        const { descricao } = req.body;
        const { categoria } = req.body;
        const { habilidade } = req.body;
        const { image } = req.body;

        const service = new UpdatePokemonService();
        const result = await service.execute({id,descricao, nome,categoria, habilidade,image})

        if(result instanceof Error) return res.status(400).json(result.message);
        return res.json(result);
    }
}

import { Request, Response } from "express";
import { CreatePokemonService } from "../../services/Pokemon/CreatePokemonService";

export class CreatePokemonController{
    async handle(req:Request, res: Response){
        const { nome } = req.body;
        const { categoria } = req.body;
        const { habilidade } = req.body;
        const { descricao } = req.body
        const { image } =req.body
        const service = new CreatePokemonService();

        const result = await service.execute({nome,descricao,image ,categoria,habilidade});

        if (result instanceof Error) return res.status(400).send(result.message);

        return res.json(result);
    }
}
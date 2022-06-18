import { Request, Response } from "express";
import { CreateLivroService } from "../../services/Livro/CreateLivroService"

export class CreateLivroController{
    async handle(req:Request, res: Response){
        const { titulo } = req.body;
        const { descricao } = req.body;
        const { data_lancamento } = req.body;
        const { image } = req.body;
        const service = new CreateLivroService();

        const result = await service.execute({titulo, descricao, data_lancamento,image});

        if (result instanceof Error) return res.status(400).send(result.message);

        return res.json(result);
    }
}
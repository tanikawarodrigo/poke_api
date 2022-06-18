import { Request, Response } from "express";
import { UpdateLivroService } from "../../services/Livro/UpdateLivroService";


export class UpdateLivroController{
    
    async handle(req:Request, res:Response){
        
        const { id } = req.params;
        const { titulo } = req.body;
        const { descricao } = req.body;
        const { data_lancamento } = req.body;
        const service = new UpdateLivroService();
        const result = await service.execute({id, titulo,descricao, data_lancamento})

        if(result instanceof Error) return res.status(400).json(result.message);
        return res.json(result);
    }
}

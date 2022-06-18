import { DeleteLivroService } from "../../services/Livro/DeleteLivroService"
import { Request, Response} from "express"

export class DeleteLivroController{
    async handle(req:Request, res:Response){
        const service = new DeleteLivroService();
        const { id } = req.params;
        const result = await service.execute(id);
        if(result instanceof Error) return res.status(400).json(res.message)
        return res.status(204).end()
    }
}
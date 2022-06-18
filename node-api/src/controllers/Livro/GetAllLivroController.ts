import { Request, Response} from "express"
import { GetAllLivroService } from "../../services/Livro/GetAllLivroService"

export class GetAllLivroController{
    async handle(req:Request, res:Response){
        const service = new GetAllLivroService();
        const livros = await service.execute(); 
        
        return res.json(livros);
    }
}
import { DeleteUsuarioService } from "../../services/Usuario/DeleteUsuariosService";
import { Request, Response} from "express"

export class DeleteUsuarioController{
    async handle(req:Request, res:Response){
        const service = new DeleteUsuarioService();
        const { id } = req.params;
        const result = await service.execute(id);
        if(result instanceof Error) return res.status(400).json(res.message)
        return res.status(204).end()
    }
}
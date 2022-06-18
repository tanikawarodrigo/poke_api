import { GetOneUsuarioService } from "../../services/Usuario/GetOneUsuariosService";
import { Request, Response } from "express"

export class GetOneUsuarioController {
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const service = new GetOneUsuarioService();

        const result = await service.execute({id});
        if(result instanceof Error) return res.status(400).json(result.message)
        return res.json(result);
    }
}
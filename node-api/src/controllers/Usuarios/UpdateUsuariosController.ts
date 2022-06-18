import { Request, Response } from "express";
import { UpdateUsuarioService } from "../../services/Usuario/UpdateUsuariosService";




export class UpdateUsuariosController{
    async handle(req:Request, res:Response){
       
        const { id } = req.params;
        const { name } = req.body;
        const { last_name } = req.body;
        const { senha } = req.body;
        const { email } = req.body;
        const service = new UpdateUsuarioService();
        
        const result = await service.execute({id, name,last_name, senha,email})

        if(result instanceof Error) return res.status(400).json(result.message);
        return res.json(result);
    }
}

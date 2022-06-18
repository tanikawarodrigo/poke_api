import { Request, Response } from "express";
import { CreateUsuarioService } from "../../services/Usuario/CreateUsuariosService"
import * as bcrypt from 'bcrypt';
export class CreateUsuariosController{
    async handle(req:Request, res: Response){
        const { name } = req.body;
        const { last_name } = req.body;
        const { senha } = req.body;
        const { email } = req.body;
        const salt = await bcrypt.genSalt(10)
        
        const service = new CreateUsuarioService();

        const result = await service.execute({name, last_name, senha, email});

        if (result instanceof Error) return res.status(400).send(result.message);

        return res.json(result);
    }
}
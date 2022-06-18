import { Request, Response} from "express"
import { GetAllUsuarioService } from "../../services/Usuario/GetAllUsuariosService"

export class GetAllUsuarioController{
    async handle(req:Request, res:Response){
        const service = new GetAllUsuarioService();
        const usuarios = await service.execute(); 
        
        return res.json(usuarios);
    }
}
import { Request, Response } from "express";
import { LoginService } from "../../services/Usuario/loginService";
import jwt from "jsonwebtoken"

const SECRET = "pokesecret"
export class LoginController{
    async handle(req:Request, res:Response){
        const { senha } = req.body;
        const { email } = req.body;
        const service = new LoginService();
        const dados_usuario_logado = await service.execute({email,senha})
        if(dados_usuario_logado instanceof Error) return res.status(401).json(dados_usuario_logado.message);
        let nome = dados_usuario_logado.name
        let sobrenome = dados_usuario_logado.last_name
        const token = jwt.sign({id: dados_usuario_logado.id}, SECRET, {expiresIn:300})
        return res.json({ auth:true, token, nome, sobrenome });
    }
        
}
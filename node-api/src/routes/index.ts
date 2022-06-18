import { Router } from "express";
import { CreateUsuariosController } from "../controllers/Usuarios/CreateUsuariosController";
import { DeleteUsuarioController } from "../controllers/Usuarios/DeleteUsuariosController";
import { GetAllUsuarioController } from "../controllers/Usuarios/GetAllUsuariosController";
import { GetOneUsuarioController } from "../controllers/Usuarios/GetOneUsuariosController";
import { LoginController } from "../controllers/Usuarios/LoginController";
import { UpdateUsuariosController } from "../controllers/Usuarios/UpdateUsuariosController";
import jwt from "jsonwebtoken"
import { Request, Response } from "express";
import { GetAllLivroController } from "../controllers/Livro/GetAllLivroController";
import { CreateLivroController } from "../controllers/Livro/CreateLivroController";
import { DeleteLivroController } from "../controllers/Livro/DeleteLivroController";
import { GetAllPokemonController } from "../controllers/Pokemon/GetAllPokemonController";
import { CreatePokemonController } from "../controllers/Pokemon/CreatePokemonController";
import { GetOnePokemonController } from "../controllers/Pokemon/GetOnePokemonController";
import { DeletePokemonController } from "../controllers/Pokemon/DeletePokemonController";
import { UpdatePokemonController } from "../controllers/Pokemon/UpdatePokemonController";

const SECRET = "pokesecret"

const routes = Router();
routes
    .route("/login")
    .post(new LoginController().handle)



function verifyJWT(req,res,next){
    const token= req.headers['x-access-token']
    const index = blackList.findIndex(item => item === token);
    if(index !== -1) return res.status(401).end();

    jwt.verify(token, SECRET,(err, decoded)=>{
        if (err) return res.status(401).end();
        req.userid = decoded.userid;
        next();
    })
}



routes
    .route("/usuario")
    .get(verifyJWT,new GetAllUsuarioController().handle)
    .post(new CreateUsuariosController().handle)

routes
    .route("/usuario/:id")
    .get(new GetOneUsuarioController().handle)
    .delete(new DeleteUsuarioController().handle)
    .put(new UpdateUsuariosController().handle)


const blackList =[];
routes
    .post("/logout",function(req:Request,res){
        blackList.push(req.headers['x-acces-token'])
        // req.logout();
        res.redirect("/")
    })
routes
    .route("/livro")
    .get(new GetAllLivroController().handle)
    .post(new CreateLivroController().handle)

routes
    .route("/livro/:id")
    .put(new CreateLivroController().handle)
    .delete(new DeleteLivroController().handle)

routes
    .route("/pokemon")
    .get(new GetAllPokemonController().handle)
    .post(new CreatePokemonController().handle)

routes
    .route("/pokemon/:id")
    .get(new GetOnePokemonController().handle)
    .delete(new DeletePokemonController().handle)
    .put(new UpdatePokemonController().handle)
export {routes}
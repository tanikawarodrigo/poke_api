import "reflect-metadata"
import { DataSource } from "typeorm"
import { Livro } from "./entity/Livro"
import { Pokemon } from "./entity/Pokemon"
import { Usuario } from "./entity/Usuario"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "poke_db",
    synchronize: true,
    logging: true,
    entities: [Usuario,Livro,Pokemon],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize().then(async () => {

}).catch(error => console.log(error))
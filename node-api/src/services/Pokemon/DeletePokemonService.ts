
import { AppDataSource } from "../../data-source"
import { Pokemon } from "../../entity/Pokemon"



export class DeletePokemonService {
    async execute ( id:number ){
        const repo = AppDataSource.getRepository(Pokemon);
        if (!(await repo.findOneBy({id}))) return new Error("Pokemon para delecao nao encontrado")

         await repo.delete(id);
    }
}
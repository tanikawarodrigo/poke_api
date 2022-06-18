import { AppDataSource } from "../../data-source"
import { Pokemon } from "../../entity/Pokemon";

type UsuarioRequest = {
    id: number;
    nome: string;
    descricao: string;
    habilidade: string;
    categoria: string;
    image: string
}

export class UpdatePokemonService {
    async execute ({ id,nome,descricao,habilidade,categoria, image}: UsuarioRequest): Promise < Pokemon | Error>{
        const repo = AppDataSource.getRepository(Pokemon);
        const pokemon = await repo.findOneBy({id: id});
        if (!pokemon) return new Error("Pokemon nao existe"); 
        
        pokemon.nome = nome ? nome : pokemon.nome;
        
        pokemon.descricao = descricao ? descricao : pokemon.descricao;

        pokemon.categoria = categoria ? categoria : pokemon.categoria;
        
        pokemon.habilidade = habilidade ? habilidade : pokemon.habilidade;

        pokemon.image = image ? image : pokemon.image
        
        await repo.save(pokemon);

        return pokemon
    }
}
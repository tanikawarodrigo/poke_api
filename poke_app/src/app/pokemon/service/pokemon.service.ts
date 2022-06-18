import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'api/pokemon';
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
  
  getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.url)  
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.url + '/' + id)
  }

  savePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.httpClient.post<Pokemon>(this.url, JSON.stringify(pokemon), this.httpOptions)
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.httpClient.put<Pokemon>(this.url + '/' + pokemon.id, JSON.stringify(pokemon), this.httpOptions)
  }

  deletePokemon(pokemon: Pokemon) {
    return this.httpClient.delete<Pokemon>(this.url + '/' + pokemon.id, this.httpOptions)      
  }
}

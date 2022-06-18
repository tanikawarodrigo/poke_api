import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Livro } from '../model/livro';

@Injectable({
  providedIn: 'root'
})

export class LivroService {
  url = 'api/livro';
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getLivros(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.url)
  }

  getLivrosById(id: number): Observable<Livro> {
    return this.httpClient.get<Livro>(this.url + '/' + id)
  }

  saveLivros(livro: Livro): Observable<Livro> {
    return this.httpClient.post<Livro>(this.url, JSON.stringify(livro), this.httpOptions)
  }

  updateLivros( livro: Livro): Observable<Livro> {
    return this.httpClient.put<Livro>(this.url + '/' + livro.id, JSON.stringify( livro), this.httpOptions)
  }

  deleteLivros( livro: Livro) {
    return this.httpClient.delete<Livro>(this.url + '/' +  livro.id, this.httpOptions)
  }
}

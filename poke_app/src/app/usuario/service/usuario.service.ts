import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'api/usuario';
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  
  getUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url)
  
  }

  
  getUsuarioByEmail(email: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.url + '/' + email)
 
  }

 
  saveUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.url, JSON.stringify(usuario), this.httpOptions)

  }


  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(this.url + '/' + usuario.id, JSON.stringify(usuario), this.httpOptions)
  
  }


  deleteUsuario(usuario: Usuario) {
    return this.httpClient.delete<Usuario>(this.url + '/' + usuario.id, this.httpOptions)
 
      
  }


}

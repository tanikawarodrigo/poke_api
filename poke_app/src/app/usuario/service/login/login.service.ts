import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from '../../models/usuario';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'api/login';
  constructor(private httpClient: HttpClient, private router:Router) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  loginUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.url, JSON.stringify(usuario), this.httpOptions)
    
  }
  getToken() {
    return localStorage.getItem('access_token');
  }

  getUsuarioLogado(){
    const nome = JSON.stringify(localStorage.getItem('nome'));
    console.log(nome);
    const sobrenome = JSON.stringify(localStorage.getItem('sobrenome'));
    console.log(sobrenome)
    return (nome.replace(/[^a-zA-Zs]/g, " ") +''+sobrenome.replace(/[^a-zA-Zs]/g, " "))
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
  doLogout() {
  let removeToken = localStorage.removeItem('access_token');
  if (removeToken == null) 
    this.router.navigate(['/login']);
  }
}

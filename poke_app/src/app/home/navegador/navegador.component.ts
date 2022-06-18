import { Component, OnInit } from '@angular/core';
import { AlertService } from 'app/usuario/service/alert.service';
import { LoginService } from 'app/usuario/service/login/login.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css'],

})
export class NavegadorComponent implements OnInit {
  dados = this.loginService.getUsuarioLogado()
  constructor(
    private loginService:LoginService,
    private alertService:AlertService
  ) { 
    
  }

  ngOnInit(): void {
    
    const taLogado = this.loginService.isLoggedIn();
  }
  
  logout(){
    
    this.loginService.doLogout();
  }
}

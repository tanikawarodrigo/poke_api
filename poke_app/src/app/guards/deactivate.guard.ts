import { CadastroComponent } from "app/usuario/cadastro/cadastro.component";
import { LoginComponent } from "app/usuario/login/login.component";
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs";
import { LoginService } from "app/usuario/service/login/login.service";
@Injectable()
export class DeactivateGuard implements CanDeactivate<LoginComponent | CadastroComponent> {
  
  constructor(
    private authService: LoginService,
    private router: Router
  ){}
  canDeactivate(
    component: LoginComponent, 
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if(this.authService.isLoggedIn()) return true;
    return false
  }
}

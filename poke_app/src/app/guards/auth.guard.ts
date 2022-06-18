import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'app/usuario/service/login/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(
    private authService: LoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean> | boolean{
    if(this.authService.isLoggedIn()) return true;
    this.router.navigate(["/login"])
    return false;
  }
}

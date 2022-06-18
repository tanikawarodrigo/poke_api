import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {  of } from 'rxjs';
import { AlertService } from '../service/alert.service';
import { LoginService } from '../service/login/login.service';
import { Router} from '@angular/router';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(
      private fb: FormBuilder,
      private loginService: LoginService,
      private alertService: AlertService,
      private router: Router,
      ) { }

  ngOnInit(): void {
    this.createForm(new Usuario());
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    })
    
  }

  createForm(usuario: Usuario){
    this.loginForm = this.fb.group({
      email: [usuario.email],
      senha: [usuario.senha],
    })
  }
  
  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      
      this.loginService.loginUsuario(this.loginForm.value).subscribe(
        (res:any)=>{
          localStorage.setItem('nome', JSON.stringify(res.nome))
          localStorage.setItem('sobrenome', JSON.stringify(res.sobrenome))
          this.alertService.success("Usuario logado com sucesso!","")
          localStorage.setItem('access_token', JSON.stringify(res.token)) 
          this.router.navigate(["/"])
        },
        (httpError) =>{
          this.alertService.error(httpError.error,"Atenção:")
          return of;
        })
      
    }
    
    
  }
  
}


import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
// import { Router } from 'express';
import { Observable, of } from 'rxjs';
import { AlertService } from '../service/alert.service';
import { UsuarioService } from '../service/usuario.service';
import { ValidaSenhaService } from '../service/validasenha.service'; 
// import { Usuario } from '../models/usuario';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro!: FormGroup;
  submitted = false;
  usuario = {} as Usuario;
  usuarios: Usuario[];
  usuario$: Observable<Usuario>

  constructor(
    private fb: FormBuilder, 
    private validadorSenha: ValidaSenhaService,
    private usuarioService: UsuarioService,
    private alertService: AlertService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // this.getUsuarios();
    this.createForm(new Usuario());
    this.formCadastro = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name:['',Validators.required],
      last_name:['',Validators.required],
      senha: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]],
      confirma_senha: ['', Validators.required],
    }, 
    {
      validator: this.validadorSenha.ConfirmaSenha('senha','confirma_senha')
    })
    
  }
  createForm(usuario: Usuario){
    this.formCadastro = this.fb.group({
      name: [usuario.name],
      last_name: [usuario.last_name],
      email: [usuario.email],
      senha: [usuario.senha],
    })
  }
  get cadastroFormControl() {
    return this.formCadastro.controls;
  }



  onSubmit() {

    this.submitted = true;
    if (this.formCadastro.valid) {
      this.usuarioService.saveUsuario(this.formCadastro.value).subscribe(
        (data)=>{
          this.alertService.success("Usuario cadastrado com sucesso!","")
          this.router.navigate(["/login"])
        },
        (httpError) =>{
          this.alertService.error(httpError.error,"Atenção:")
          return of;
        })
    }
    else{
      this.alertService.error("Revise o preenchimento do formulário","Anteção:")
    }
  }
  
}


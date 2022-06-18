import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './usuario/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LivroComponent } from './livro/livro.component';
import { PokemonComponent } from './pokemon/pokemon.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'livro', component: LivroComponent,canActivate: [AuthGuard]},
  { path: 'pokemon', component: PokemonComponent,canActivate: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

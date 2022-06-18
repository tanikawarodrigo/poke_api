import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuario/login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { MatTableModule } from '@angular/material/table' 
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { CarrosselComponent } from './home/carrossel/carrossel.component';
import { NavegadorComponent } from './home/navegador/navegador.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './usuario/service/login/login.service';
import { AuthGuard } from './guards/auth.guard';
import { LivroComponent } from './livro/livro.component';
import { PokemonComponent } from './pokemon/pokemon.component';
// import { DeactivateGuard } from './guards/deactivate.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    CarrosselComponent,
    NavegadorComponent,
    LivroComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatIconModule, 
    MatInputModule,  
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    
  ],
  providers: [LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

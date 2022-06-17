import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParrafoEjemploComponent } from './parrafo-ejemplo/parrafo-ejemplo.component';
import { ListasComponent } from './listas/listas.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { UsuarioProvider } from '../providers/usuarioProvider';
import { RolesProvider } from '../providers/rolesProvider';
import { HttpClientModule } from '@angular/common/http';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ParrafoEjemploComponent,
    ListasComponent,
    LoginComponent,
    EditarUsuarioComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuarioProvider,
    RolesProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

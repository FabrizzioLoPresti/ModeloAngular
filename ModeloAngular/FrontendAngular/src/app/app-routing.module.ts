import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListasComponent } from './listas/listas.component';
import { LoginComponent } from './login/login.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'listas',
    component: ListasComponent
  },
  {
    path: 'create',
    component: CrearUsuarioComponent
  },
  {
    path: 'editar/:id',
    component: EditarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

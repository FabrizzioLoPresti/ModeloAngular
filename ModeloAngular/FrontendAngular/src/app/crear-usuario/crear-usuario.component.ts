import { Component, OnInit } from '@angular/core';
import { RolesProvider } from '../../providers/rolesProvider';
import { UsuarioProvider } from '../../providers/usuarioProvider';
import { UsuarioPost } from '../interfaces/UsuarioPost'

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  title:string = "";
  listaRoles:any = [];
  usuario = {} as UsuarioPost;
  constructor(private rolesProvider:RolesProvider, private usuarioProvider:UsuarioProvider) {
    this.title = 'Crear Usuario';
    this.usuario.idRol = "";
  }

  ngOnInit(): void {
    this.obtenerRoles();
  }

  async obtenerRoles() {
    return await this.rolesProvider.getRoles().subscribe((data) => {
      if(data.ok) {
        this.listaRoles = data.listaRoles;
        console.log(this.listaRoles);
      } else {
        alert(data.error);
      }
    })
  }
  
  enviar() {
    console.log(this.usuario);
    if([this.usuario.nombre, this.usuario.apellido, this.usuario.password, this.usuario.idRol].includes("")) {
      alert("Todos los campos son obligatorios");
      return;
    }
    this.usuarioProvider.postUsuario(this.usuario).subscribe((data) => {
      if(data.ok) {
        alert("Usuario creado");
        this.usuario.nombre = "";
        this.usuario.apellido = "";
        this.usuario.password = "";
        this.usuario.idRol = "";
      } else {
        alert(data.error);
      }
    });
  }
}

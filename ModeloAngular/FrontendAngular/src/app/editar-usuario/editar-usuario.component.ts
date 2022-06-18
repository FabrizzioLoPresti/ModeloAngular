import { Component, OnInit } from '@angular/core';
import { UsuarioProvider } from '../../providers/usuarioProvider';
import { RolesProvider } from '../../providers/rolesProvider';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioPost } from '../interfaces/UsuarioPost';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  idPersona:string = "";
  title:string = "";
  listaRoles:any = [];
  usuario = {} as UsuarioPost;
  constructor(private rolesProvider:RolesProvider ,private usuarioProvider: UsuarioProvider, private route: ActivatedRoute, private router: Router) {
    this.idPersona = this.route.snapshot.params['id'];
    alert(this.idPersona);
    this.title = 'Actualizar Usuario';
    this.usuario.idRol = "";
  }

  ngOnInit(): void {
    this.obtenerRoles();
    this.cargarUsuario();
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

  async cargarUsuario() {
    return await this.usuarioProvider.getUsuarioId(this.idPersona).subscribe((data) => {
      if(data.ok) {
        this.usuario.nombre = data.nombre;
        this.usuario.apellido = data.apellido;
        this.usuario.password = data.password;
        this.usuario.idRol = data.idRol;
        console.log(data);
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
    this.usuarioProvider.putUsuario(this.usuario, this.idPersona).subscribe((data) => {
      if(data.ok) {
        alert("Usuario actualizado");
        this.usuario.nombre = "";
        this.usuario.apellido = "";
        this.usuario.password = "";
        this.usuario.idRol = "";
        this.router.navigateByUrl('/listas');
      } else {
        alert(data.error);
      }
    });
  }
}
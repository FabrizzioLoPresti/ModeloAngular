import { Component, OnInit } from '@angular/core';
import { RolesProvider } from '../../providers/rolesProvider';
import { UsuarioProvider } from '../../providers/usuarioProvider';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  listaRoles:any = [];
  constructor(private rolesProvider:RolesProvider, private usuarioProvider:UsuarioProvider) { }

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
}

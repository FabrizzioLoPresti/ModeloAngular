import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioProvider } from '../../providers/usuarioProvider';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  listaUsuarios:any = [];
  constructor(private router: Router, private usuarioProvider: UsuarioProvider) { 
    
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  async obtenerUsuarios() {
    this.listaUsuarios = await this.usuarioProvider.getUsuarios().subscribe((data) => {
      if(data.ok) {
        this.listaUsuarios = data.listaUsuarios;
      } else {
        alert(data.error);
      }
    })
  }

  async editUser(userId: string) {
    this.router.navigateByUrl('/editar/' + userId);
  }

  async eliminarUsuario(userId: any) {
    console.log(userId);
  }
}

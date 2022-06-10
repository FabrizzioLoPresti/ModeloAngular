import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';
import { Router } from '@angular/router';
import { UsuarioProvider } from '../../providers/usuarioProvider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {} as Usuario;
  contador:any;
  urlImagen:string = '';

  constructor(private router: Router, private usuarioProvider: UsuarioProvider) { 
    this.contador = 0;
    this.urlImagen = 'https://cdn.cloudflare.steamstatic.com/steam/apps/221100/capsule_616x353.jpg?t=1643209285';
  }

  ngOnInit(): void {
  }

  login() {
    // this.contador++;
    // if(this.usuario.nombre == 'admin' && this.usuario.password == 'admin') {
    //   alert('Login correcto');
    //   this.router.navigateByUrl('/listas');
    // } else {
    //   alert('Login incorrecto');
    // }
    this.usuarioProvider.postLogin(this.usuario.nombre, this.usuario.password).subscribe(
      (data) => {
        if(data.ok) {
          this.router.navigateByUrl('/listas');
        } else {
          alert('Login incorrecto');
        }
      }
    );
  }
}

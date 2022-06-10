import { Component, OnInit } from '@angular/core';
import { UsuarioProvider } from '../../providers/usuarioProvider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  idPersona:string = "";
  constructor(private usuarioProvider: UsuarioProvider, private route: ActivatedRoute) {
    this.idPersona = this.route.snapshot.params['id'];
    alert(this.idPersona);
  }

  ngOnInit(): void {
  }


}
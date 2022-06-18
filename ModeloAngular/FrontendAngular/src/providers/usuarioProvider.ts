import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class UsuarioProvider {

  apiUrl: string = environment.urlAPI;

  constructor(private http: HttpClient) {
    
  }

  postLogin(nombre:string, password:string): Observable<any> {
    const comando = {
      "nombre": nombre,
      "password": password
    }
    const url = this.apiUrl + 'api/usuarios/login';
    const header = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(comando);
    return this.http.post(url, body, { headers: header });
  }

  getUsuarios(): Observable<any> {
    const url = this.apiUrl + 'api/usuarios';
    const header = { 'Content-Type': 'application/json' };
    return this.http.get(url, { headers: header });
  }

  getUsuarioId(id: string): Observable<any> {
    const url = this.apiUrl + 'api/usuarios/' + id;
    const header = { 'Content-Type': 'application/json' };
    return this.http.get(url, { headers: header });
  }

  deleteUsuario(id: string): Observable<any> {
    const url = this.apiUrl + 'api/usuarios/deleteFisico/' + id;
    const header = { 'Content-Type': 'application/json' };
    return this.http.delete(url, { headers: header });
  }

  postUsuario(usuario: any): Observable<any> {
    const url = this.apiUrl + 'api/usuarios';
    const header = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(usuario);
    return this.http.post(url, body, { headers: header });
  }

  putUsuario(usuario: any, id:string): Observable<any> {
    const url = this.apiUrl + 'api/usuarios/update/' + id;
    const header = { 'Content-Type': 'application/json' };
    const comando = {
      "id": id,
      "nombre": usuario.nombre,
      "apellido": usuario.apellido,
      "password": usuario.password,
      "idRol": usuario.idRol
    }
    const body = JSON.stringify(comando);
    return this.http.put(url, body, { headers: header });
  }
}
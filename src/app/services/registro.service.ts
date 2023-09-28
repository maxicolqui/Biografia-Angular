import { Injectable } from '@angular/core';
import { URL_ENDPOINT } from '../config/config';
import { Observable } from 'rxjs';
import { Registro } from '../models/Registro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private urlEndPoint: string = URL_ENDPOINT + '/registro';
  private urlPost: string = URL_ENDPOINT + '/guardar';
  private urlPut: string = URL_ENDPOINT + '/actualizar';
  private urlDelete: string = URL_ENDPOINT + '/eliminar';

  constructor( private http: HttpClient) { }

  getAll(): Observable<Registro[]>{
    return this.http.get<Registro[]>(this.urlEndPoint);
  }
  get(id: number): Observable<Registro>{
    return this.http.get<Registro>(this.urlEndPoint + '/'+id);
  }
  //metodo para gaurdar los datos del front
  crear(registro: Registro): Observable<Registro>{
    return this.http.post<Registro>(this.urlPost,registro);
  }
  //metodo para actualizar los datos
  actualizar(registro: Registro): Observable<Registro>{
    return this.http.put<Registro>(this.urlPut+'/'+registro.id,registro);
  }
  //metodo para borrar los datos de una base de datos
  borrar(id:number): Observable<any>{
    return this.http.delete(this.urlDelete+'/'+id);
  }
}

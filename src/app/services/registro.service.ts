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

  constructor( private http: HttpClient) { }

  getAll(): Observable<Registro[]>{
    return this.http.get<Registro[]>(this.urlEndPoint);
  }
  get(id: number): Observable<Registro>{
    return this.http.get<Registro>(this.urlEndPoint + '/'+id);
  }

}

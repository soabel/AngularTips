import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../../util/base-service.service';

@Injectable()
export class SeguridadService extends BaseService {

  constructor(private http: Http) { super(http); }

  autenticarUsuario(usuario: any) {
    const resultado = <Promise<any>>this.httpPost('http://localhost:54258/api/seguridad/AutenticarUsuario', usuario);
    return resultado;
  }

}

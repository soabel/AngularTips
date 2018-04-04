import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class BaseService {

  constructor(private https: Http) {
  }

  httpPost(url: string, data: any): Promise<Response> {
    return this.https.post(url, JSON.stringify(data), this.obtenerEncabezadoHttpPost())
      .toPromise()
      .then(this.recuperarDatos).catch(this.controlarError);
  }

  httpPostNonSecure(url: string, data: any): Promise<Response> {
    return this.https.post(url, JSON.stringify(data), this.obtenerEncabezadoHttpPostNonSecure())
      .toPromise()
      .then(this.recuperarDatos).catch(this.controlarError);
  }

  recuperarDatos(response: any) {
    let resultado: any;
    const retorno = response.json();
    resultado = retorno;
    return resultado;
  }

  checkIsLogin() {
    return true;
  }

  checkIsLoginToken() {

    return true;
  }

  grabarKeyApp(parametro: any) {

  }

  obtenerKeyApp(): any {
    return null;
  }


  controlarError(error: Response | any) {
    console.log('Aqui error');
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  obtenerEncabezadoHttpPost(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    // const entorno = this.obtenerEntorno();
    headers.append('IdUsuario', 'demo');

    const options = new RequestOptions({ headers: headers });
    return options;
  }

  obtenerEncabezadoHttpPostNonSecure(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json' });

    const options = new RequestOptions({ headers: headers });
    return options;
  }



}

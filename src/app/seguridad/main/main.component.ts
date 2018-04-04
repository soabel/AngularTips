import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../services/seguridad.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [SeguridadService]
})
export class MainComponent implements OnInit {

  private model: any = {}; // Binding a un model genérico
  constructor(private seguridadService: SeguridadService, private router: Router) {

  }

  ngOnInit() {
    const me = this;
    me.model.usuario = {};
    me.model.usuario.login = 'Carlos';
    me.model.usuario.password = null;

    // Binding a un array de objetos
    me.model.usuario.permisos = [
      { id: 1, nombre: 'Lectura', selecionado: true },
      { id: 1, nombre: 'Escritura', seleccionado: false }
    ];
  }

  onLogin() {
    const me = this;
    console.log(me.model);

    this.seguridadService.autenticarUsuario(me.model.usuario).then(res => {
      me.router.navigate(['./home']);
    }).catch(err => {

      console.log(err);

    });
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Route, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Route[] = [
  {
    path: 'home',
    component: LayoutComponent
  },
  {
    path: 'administracion',
    component: LayoutComponent,
    loadChildren: '../administracion/administracion.module#AdministracionModule',
  },
  {
    path: 'finanzas',
    component: LayoutComponent,
    loadChildren: '../finanzas/finanzas.module#FinanzasModule',
  },

  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [MainComponent, LayoutComponent]
})
export class CoreModule { }

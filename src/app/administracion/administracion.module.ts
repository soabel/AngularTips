import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainComponent]
})
export class AdministracionModule { }

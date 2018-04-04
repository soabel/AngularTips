import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UtilModule } from '../util/util.module';
import { BaseService } from '../util/base-service.service';
import { HttpModule } from '@angular/http';

const routes: Route[] = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpModule,
    UtilModule
  ],
  declarations: [MainComponent],
  providers: [BaseService]
})
export class SeguridadModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ListaComponent } from './lista/lista.component';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    ListaComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule
  ]
})
export class ComponentsModule { }

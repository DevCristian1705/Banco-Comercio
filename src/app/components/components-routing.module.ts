import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LandingComponent } from './landing/landing.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {
    path: 'landing',
    component : LandingComponent, 
  },
  {
    path: 'lista',
    component : ListaComponent, 
  },
  {
    path: '', 
    redirectTo: 'landing',  
  }, 
  {
    path: '**',
    redirectTo: 'landing',
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthGuard } from './auth/mock-api/auth.guard';

const routes: Routes = [
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), 
  }, 
  { 
    path: 'components',
    loadChildren: ()=> import('./components/components.module').then(m=> m.ComponentsModule), 
    canLoad : [AuthGuard],
    canActivate : [AuthGuard]
  },
  {
    path: '', 
    redirectTo: 'components', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

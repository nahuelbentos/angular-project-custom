import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'administrador',
        loadChildren: () => import('./administrador/administrador.module').then( (m) => m.AdministradorModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

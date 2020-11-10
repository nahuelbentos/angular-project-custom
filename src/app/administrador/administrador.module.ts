import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { NavAdministradorComponent } from './components/nav-administrador/nav-administrador.component';


@NgModule({
  declarations: [NavAdministradorComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavCustomComponent } from './components/nav-custom/nav-custom.component';
import { GestionCustomComponent } from './components/gestion-custom/gestion-custom.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavCustomComponent,
    GestionCustomComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
  ],
  exports: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,

    MaterialModule,
  ],
})
export class SharedModule {}

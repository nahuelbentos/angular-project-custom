import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UsuarioSesion } from '../../../models/usuario-sesion.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  login() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe((usuarioSesion: UsuarioSesion) => {
      if (usuarioSesion) {
        localStorage.setItem('usuarioSesion', JSON.stringify(usuarioSesion));

        this.router.navigate(['/' + usuarioSesion.rol.toLowerCase()]);
      }
    });
  }
}

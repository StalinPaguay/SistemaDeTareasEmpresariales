import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private usuarioAutenticado = true;

  estaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

  cerrarSesion(): void {
    this.usuarioAutenticado = false;
  }

  iniciarSesion(): void {
    this.usuarioAutenticado = true;
  }
}

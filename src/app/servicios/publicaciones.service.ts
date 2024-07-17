import { Injectable } from '@angular/core';
import { postUsuario } from '../modelo/postusuario';



@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  private postusuario = [
    new postUsuario("nunca fue la navidad", "santa me fallo"),
    new postUsuario("mejor comer charqui que carne", "comunidad vegana israelita"),
  ];

  constructor() { }

  getPostUsuarios(): postUsuario[] {
    return this.postusuario 
  }
  
}

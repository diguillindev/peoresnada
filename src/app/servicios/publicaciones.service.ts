import { Injectable } from '@angular/core';
import { postUsuario } from '../modelo/postusuario';



@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  private postusuario = [
    new postUsuario( 1 , "nunca fue la navidad", "santa me fallo"),
    new postUsuario(2, "mejor comer charqui que carne", "comunidad vegana israelita"),
  ];

  constructor() { }

  getPostUsuarios(): postUsuario[] {
    return this.postusuario 
  }
  
  //metodo para eliminar post
  eliminarPostUsuario(id: number): void {
    this.postusuario = this.postusuario.filter(post => post.id !== id);
  }

}

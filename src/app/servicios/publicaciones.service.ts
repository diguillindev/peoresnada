import { Injectable } from '@angular/core';
import { postUsuario } from '../modelo/postusuario';




@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
/*declarar explicitamente el dato : variable postUsuario es un array de objetos postUsuario 
  private postusuario = [
    new postUsuario( 1 , "nunca fue la navidad", "santa me fallo"),
    new postUsuario(2, "mejor comer charqui que carne", "comunidad vegana israelita"),
  ];*/

  private postusuario: postUsuario[] = [
    new postUsuario(1, "nunca fue la navidad", "santa me fallo", "2023-12-25"),
    new postUsuario(2, "mejor comer charqui que carne", "comunidad vegana israelita", "2023-11-25"),
  ];

  constructor() { }

  getPostUsuarios(): postUsuario[] {
    return this.postusuario 
  }
  
  //metodo para eliminar post 
  addPostUsuario(titulo: string, descripcion: string, fecha: string): void {
    const newId = this.postusuario.length > 0 ? Math.max(...this.postusuario.map(post => post.id)) + 1 : 1;
    const newFecha = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato yyyy-MM-dd
    this.postusuario.push(new postUsuario(newId, titulo, descripcion, newFecha));
  }

  //metodo para eliminar post
  eliminarPostUsuario(id: number): void {
    this.postusuario = this.postusuario.filter(post => post.id !== id);
  }

}

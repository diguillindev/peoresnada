import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { postUsuario } from 'src/app/modelo/postusuario';
import { PublicacionesService } from 'src/app/servicios/publicaciones.service';
import { PublicacionesListaItemComponent } from './publicaciones-lista-item/publicaciones-lista-item.component';
import { IonList, IonThumbnail } from "@ionic/angular/standalone";

@Component({
  selector: 'app-publicaciones-lista',
  templateUrl: './publicaciones-lista.component.html',
  styleUrls: ['./publicaciones-lista.component.scss'],
  standalone: true,
  imports: [IonList, IonThumbnail, CommonModule, PublicacionesListaItemComponent]
})
export class PublicacionesListaComponent implements OnInit {

  

  postPublicaciones: postUsuario[] = [];

  constructor(private publicacionesService: PublicacionesService) { }

  ngOnInit(): void {
    this.getPostUsuario();
  }

  getPostUsuario(): void {
    this.postPublicaciones = this.publicacionesService.getPostUsuarios();
  }

  eliminarPostUsuario(id: number): void {
    this.publicacionesService.eliminarPostUsuario(id);
    this.getPostUsuario(); // actualizar la lista después de eliminar
  }
}

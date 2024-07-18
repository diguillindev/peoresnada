import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { postUsuario} from 'src/app/modelo/postusuario';
import { PublicacionesService } from 'src/app/servicios/publicaciones.service';
import { IonImg, IonItem, IonThumbnail, IonLabel, IonList } from "@ionic/angular/standalone";

@Component({
  selector: 'app-publicaciones-lista',
  templateUrl: './publicaciones-lista.component.html',
  styleUrls: ['./publicaciones-lista.component.scss'],
  standalone: true,
  imports:[CommonModule, IonImg, IonItem, IonThumbnail, IonLabel, IonList ]
})
export class PublicacionesListaComponent  implements OnInit {

  postPublicaciones: postUsuario[] = [];

  constructor(private PublicacionesServices: PublicacionesService) {}

  ngOnInit() {
    this.getPostUsuario();
  }

  getPostUsuario(): void {
    this.postPublicaciones = this.PublicacionesServices.getPostUsuarios();
  }
}
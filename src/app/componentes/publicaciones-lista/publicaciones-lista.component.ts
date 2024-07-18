import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { postUsuario} from 'src/app/modelo/postusuario';
import { PublicacionesService } from 'src/app/servicios/publicaciones.service';
import { IonImg, IonItem, IonThumbnail, IonLabel, IonList, IonButton, IonButtons, IonIcon, IonContent } from "@ionic/angular/standalone";
import { trashOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-publicaciones-lista',
  templateUrl: './publicaciones-lista.component.html',
  styleUrls: ['./publicaciones-lista.component.scss'],
  standalone: true,
  imports:[CommonModule, IonImg, IonItem, IonThumbnail, IonLabel, IonList, IonButton, IonButtons, IonIcon, IonContent ]
})
export class PublicacionesListaComponent  implements OnInit {

  postPublicaciones: postUsuario[] = [];

  constructor(private PublicacionesServices: PublicacionesService) 
  {
    addIcons({
      trashOutline
     });
  }

  ngOnInit():void {
    this.getPostUsuario();
  }
  
  //metodo para recuperar post
  getPostUsuario(): void {
    this.postPublicaciones = this.PublicacionesServices.getPostUsuarios();
  }
  //metodo que utiliza Publicaciones services 
  eliminarPostUsuario(id: number): void {
    this.PublicacionesServices.eliminarPostUsuario(id);
    this.getPostUsuario(); // actualizar la lista después de eliminar
  }
}
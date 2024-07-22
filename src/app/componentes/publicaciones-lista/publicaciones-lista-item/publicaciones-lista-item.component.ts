import { Component, EventEmitter, Input, Output } from '@angular/core';
import { postUsuario } from 'src/app/modelo/postusuario';
import { IonImg, IonItem, IonThumbnail, IonLabel, IonList, IonButton, IonButtons, IonIcon, IonContent, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
import { trashOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-publicaciones-lista-item',
  templateUrl: './publicaciones-lista-item.component.html',
  styleUrls: ['./publicaciones-lista-item.component.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonImg, IonItem, IonThumbnail, IonLabel, IonList, IonButton, IonButtons, IonIcon, IonContent, CommonModule]
})
export class PublicacionesListaItemComponent {
  //@Input() post : postUsuario   ds
  
  //@Input() post: postUsuario = new postUsuario ();
  //@Output() eliminar = new EventEmitter<number>();

  @Input() post: postUsuario = new postUsuario(0, '', '', '', [] ); // inicializar con valores por defecto
  @Output() eliminar = new EventEmitter<number>();

 
  

  constructor() {
    addIcons({
      trashOutline
    });
  }

  eliminarPost(): void {
    this.eliminar.emit(this.post.id);
  }
}

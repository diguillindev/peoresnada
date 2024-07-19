import { Component, EventEmitter, Input, Output } from '@angular/core';
import { postUsuario } from 'src/app/modelo/postusuario';
import { IonImg, IonItem, IonThumbnail, IonLabel, IonList, IonButton, IonButtons, IonIcon, IonContent } from "@ionic/angular/standalone";
import { trashOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-publicaciones-lista-item',
  templateUrl: './publicaciones-lista-item.component.html',
  styleUrls: ['./publicaciones-lista-item.component.scss'],
  standalone: true,
  imports: [IonImg, IonItem, IonThumbnail, IonLabel, IonList, IonButton, IonButtons, IonIcon, IonContent]
})
export class PublicacionesListaItemComponent {
  //@Input() post : postUsuario;
  
  @Input() post: postUsuario = new postUsuario ();
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

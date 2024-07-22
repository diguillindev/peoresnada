import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonButton, IonIcon, IonText, IonList, IonModal, IonHeader, IonTitle, IonButtons, IonContent, IonGrid, IonRow, IonCol, IonImg, IonLabel } from "@ionic/angular/standalone";
import { cameraOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PublicacionesService } from 'src/app/servicios/publicaciones.service';
import { FormsModule } from '@angular/forms';
import { Camera, CameraResultType} from '@capacitor/camera';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-publicaciones-formulario',
  templateUrl: './publicaciones-formulario.component.html',
  styleUrls: ['./publicaciones-formulario.component.scss'],
  standalone: true,
  imports:[IonInput, IonItem, IonButton, IonIcon, IonText, IonList, FormsModule, IonModal, IonHeader, IonTitle, IonButtons, IonContent, IonGrid, IonRow, IonCol, IonImg, CommonModule, IonLabel ]
})
export class PublicacionesFormularioComponent  implements OnInit {

  titulo: string = '';
  descripcion: string = '';
  fecha: string = '';
  fotos: string[] = []


  constructor(private publicacionesService: PublicacionesService) {

    addIcons({
      cameraOutline
    });

   }

  ngOnInit() {}

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64
      });

      if (image.base64String) {
        this.fotos.push(image.base64String);
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }
  

  //metodo onSubmit
  onSubmit() {
    this.publicacionesService.addPostUsuario(this.titulo, this.descripcion, this.fecha, this.fotos);
    console.log('Titulo:', this.titulo);
    console.log('Descripcion:', this.descripcion);
    console.log('Fecha:', this.fecha);
    console.log('Fotos', this.fotos);
  }

 

}

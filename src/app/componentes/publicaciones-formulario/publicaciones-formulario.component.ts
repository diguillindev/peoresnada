import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonButton, IonIcon, IonText, IonList, IonModal, IonHeader, IonTitle, IonButtons, IonContent } from "@ionic/angular/standalone";
import { cameraOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PublicacionesService } from 'src/app/servicios/publicaciones.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-publicaciones-formulario',
  templateUrl: './publicaciones-formulario.component.html',
  styleUrls: ['./publicaciones-formulario.component.scss'],
  standalone: true,
  imports:[IonInput, IonItem, IonButton, IonIcon, IonText, IonList, FormsModule, IonModal, IonHeader, IonTitle, IonButtons, IonContent]
})
export class PublicacionesFormularioComponent  implements OnInit {

  titulo: string = '';
  descripcion: string = '';
  


  constructor(private publicacionesService: PublicacionesService) {

    addIcons({
      cameraOutline
    });

   }

  ngOnInit() {}

  //metodo onSubmit
  onSubmit() {
    this.publicacionesService.addPostUsuario(this.titulo, this.descripcion);
    console.log('Titulo:', this.titulo);
    console.log('Descripcion:', this.descripcion);
  }

 

}

import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonButton, IonIcon, IonText, IonList } from "@ionic/angular/standalone";
import { cameraOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-publicaciones-formulario',
  templateUrl: './publicaciones-formulario.component.html',
  styleUrls: ['./publicaciones-formulario.component.scss'],
  standalone: true,
  imports:[IonInput, IonItem, IonButton, IonIcon, IonText, IonList]
})
export class PublicacionesFormularioComponent  implements OnInit {

  constructor() {

    addIcons({
      cameraOutline
    });

   }

  ngOnInit() {}

}

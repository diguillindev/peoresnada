import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonFab } from '@ionic/angular/standalone';
import { addOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PublicacionesListaComponent } from "../../componentes/publicaciones-lista/publicaciones-lista.component";


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
  standalone: true,
  imports: [IonFab, RouterLink, IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, PublicacionesListaComponent]
})
export class ListaPage implements OnInit {

  constructor() { 
   
    addIcons({
      addOutline
     });

  }

  ngOnInit() {
  }

}

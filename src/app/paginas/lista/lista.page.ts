import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonFab, IonList, IonItem, IonLabel, IonModal } from '@ionic/angular/standalone';
import { addOutline, trashOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PublicacionesListaComponent } from "../../componentes/publicaciones-lista/publicaciones-lista.component";
import { PublicacionesService } from 'src/app/servicios/publicaciones.service';
import { postUsuario } from 'src/app/modelo/postusuario';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
  standalone: true,
  providers: [DatePipe],
  imports: [IonModal, IonFab, RouterLink, IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, PublicacionesListaComponent, IonList, IonItem, IonLabel]
})
export class ListaPage implements OnInit {


  publicaciones: postUsuario[] = [];
  isModalOpen = false;
  currentPublicacionId: number | null = null;

  constructor(private publicacionesService: PublicacionesService, private datePipe: DatePipe) {
    addIcons({
      addOutline,
      trashOutline

    });
  }

  ngOnInit() {
    this.publicaciones = this.publicacionesService.getPostUsuarios();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  openModal(id: number) {
    this.currentPublicacionId = id;
    this.setOpen(true);
  }

  /*eliminarPublicacion(id: number) {
    this.publicacionesService.eliminarPostUsuario(id);
    this.publicaciones = this.publicacionesService.getPostUsuarios(); // Refresh the list
  }*/

  eliminarPublicacion(id: number) {
    if (id !== null) {
      this.publicacionesService.eliminarPostUsuario(id);
      this.publicaciones = this.publicacionesService.getPostUsuarios();
      this.setOpen(false);
    }
  }




  formatDate(date: string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

}


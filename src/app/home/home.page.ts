import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Semester } from '../models/models';
import { HttpClient } from '@angular/common/http';

import { 
 IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonChip
} from '@ionic/angular/standalone';
import { 
  notificationsOutline, 
  personCircleOutline, 
  timeOutline, 
  schoolOutline,
  chevronForwardOutline, personOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonChip
  ],
  providers: [HttpClient]
})
export class HomePage implements OnInit {
  currentSemester!: Semester; // Cambiado a undefined inicialmente para esperar los datos
  loading: boolean = true;   // Bandera para mostrar una indicación de carga
  errorMessage: string | null = null; // Para manejar errores en la carga
  router = inject(Router);
  utilService = inject(UtilService);
  constructor(
  ) {
    addIcons({
      notificationsOutline,
      personCircleOutline,
      personOutline,
      timeOutline,
      schoolOutline,
      chevronForwardOutline
    });
  }

  ngOnInit(): void {
    this.loadSemester();
  }

  // Método para cargar el semestre
  private loadSemester(): void {
    this.utilService.getAll('semesters').subscribe({
      next: (data) => {
        // Asumimos que data es un array, tomamos el primer semestre
        this.currentSemester = data[0] as Semester;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar el semestre:', err);
        this.errorMessage = 'Error al cargar los datos. Por favor, inténtelo nuevamente.';
        this.loading = false;
      }
    });
  }

  navigateToSubject(subjectId: string): void {
    this.router.navigate([`/tabs/subject/info/${subjectId}`]);
  }

  getStatusColor(status: string): string {
    return status === 'enrolled' ? 'success' : 'warning';
  }
}
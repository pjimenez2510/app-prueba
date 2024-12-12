import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Semester } from '../models/models';
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
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonChip
  ],
})
export class HomePage implements OnInit {
  currentSemester: Semester = {
    name: 'Semestre 2024-1',
    subjects: [
      {
        id: '1',
        name: 'Programación Avanzada',
        professor: 'Dr. Juan Pérez',
        credits: 4,
        schedule: { day: 'Lunes', time: '08:00 - 10:00' },
        status: 'enrolled',
        finalGrade: null,
        assignments: []
      },
      {
        id: '2',
        name: 'Bases de Datos',
        professor: 'Dra. María González',
        credits: 4,
        schedule: { day: 'Martes', time: '10:00 - 12:00' },
        status: 'enrolled',
        finalGrade: null,
        assignments: []
      },
      {
        id: '3',
        name: 'Desarrollo Web',
        professor: 'Ing. Carlos Rodríguez',
        credits: 3,
        schedule: { day: 'Miércoles', time: '14:00 - 16:00' },
        status: 'enrolled',
        finalGrade: null,
        assignments: []
      }
    ],
    user: {
      email: 'estudiante@uta.edu.ec',
      password: '******'
    }
  };

  constructor(private router: Router) {
    addIcons({notificationsOutline,personCircleOutline,personOutline,timeOutline,schoolOutline,chevronForwardOutline});
  }

  ngOnInit(): void {}

  navigateToSubject(subjectId: string): void {
    this.router.navigate([`/tabs/subjects/${subjectId}`]);
  }

  getStatusColor(status: string): string {
    return status === 'enrolled' ? 'success' : 'warning';
  }
}
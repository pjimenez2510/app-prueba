import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  IonChip,
} from '@ionic/angular/standalone';
import {
  notificationsOutline,
  personCircleOutline,
  timeOutline,
  schoolOutline,
  chevronForwardOutline,
  personOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AcademicService } from '../services/subject.service';
import { Semester } from '../models/models';

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
    IonChip,
  ],
})
export class HomePage implements OnInit {
  currentSemester?: Semester;

  constructor(
    private router: Router,
    private academicService: AcademicService
  ) {
    addIcons({
      notificationsOutline,
      personCircleOutline,
      personOutline,
      timeOutline,
      schoolOutline,
      chevronForwardOutline,
    });
  }

  ngOnInit(): void {
    this.academicService.getCurrentSemester().subscribe((semester) => {
      this.currentSemester = semester;
    });
  }

  navigateToSubject(subjectId: string): void {
    this.router.navigate([`/tabs/subject/info/${subjectId}`]);
  }

  getStatusColor(status: string): string {
    return status === 'enrolled' ? 'success' : 'warning';
  }

  getStatusText(status: string): string {
    return status === 'enrolled' ? 'Matriculado' : 'No matriculado';
  }
}

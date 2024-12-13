import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonBadge,
  IonIcon,
  IonButton,
  IonSkeletonText,
} from '@ionic/angular/standalone';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { Assignment, Subject } from 'src/app/models/models';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import {
  calendarOutline,
  timeOutline,
  schoolOutline,
  trophyOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AcademicService } from 'src/app/services/subject.service';
@Component({
  selector: 'app-grades',
  templateUrl: './grades.page.html',
  styleUrls: ['./grades.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonLabel,
    IonListHeader,
    IonList,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonContent,
    RouterOutlet,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    TaskListComponent,
  ],
})
export class GradesPage implements OnInit {
  subject: Subject | undefined;
  loading = true;
  route = inject(ActivatedRoute);
  academicService = inject(AcademicService);

  constructor() {
    addIcons({
      calendarOutline,
      timeOutline,
      schoolOutline,
      trophyOutline,
    });
  }

  ngOnInit() {
    const subjectId = this.route.snapshot.paramMap.get('id');
    if (subjectId) {
      this.subject = this.academicService.getSubjectById(subjectId);
      this.loading = false;
    }
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'enrolled':
        return 'success';
      case 'not enrolled':
        return 'warning';
      default:
        return 'medium';
    }
  }

  getStatusText(status: string): string {
    switch (status.toLowerCase()) {
      case 'enrolled':
        return 'Matriculado';
      case 'not enrolled':
        return 'No Matriculado';
      default:
        return status;
    }
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}

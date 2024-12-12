import { Component, Input, OnInit } from '@angular/core';
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
  IonChip,
  IonLabel,
  IonBadge,
  IonIcon,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';
import { calendarOutline, documentOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Assignment } from 'src/app/models/models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonChip,
    IonLabel,
    IonBadge,
    IonIcon,
    IonList,
    IonItem,
  ],
})
export class TaskListPage {
  @Input() assignments: Assignment[] = [];

  constructor() {
    addIcons({ calendarOutline, documentOutline });
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'late':
        return 'danger';
      default:
        return 'medium';
    }
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}

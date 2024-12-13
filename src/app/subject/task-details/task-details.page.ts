import { Component, OnInit, inject } from '@angular/core';
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
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonList,
  IonListHeader,
  IonBadge,
  IonSkeletonText,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { ToastController } from '@ionic/angular';
import { Assignment, Resource } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';
import {
  downloadOutline,
  calendarOutline,
  documentOutline,
  checkmarkCircleOutline,
  alertCircleOutline,
  hourglassOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AcademicService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
  standalone: true,
  imports: [
    IonListHeader,
    IonList,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    CommonModule,
    FormsModule,
    IonBadge,
    IonSkeletonText,
    IonBackButton,
    IonButtons,
  ],
})
export class TaskDetailsPage implements OnInit {
  task: Assignment | null = null;
  loading = true;
  subjectId: string | null = null;
  taskId: string | null = null;

  private route = inject(ActivatedRoute);
  private academicService = inject(AcademicService);
  private toastController = inject(ToastController);

  constructor() {
    addIcons({
      downloadOutline,
      calendarOutline,
      documentOutline,
      checkmarkCircleOutline,
      alertCircleOutline,
      hourglassOutline,
    });
  }

  ngOnInit() {
    // Cambiamos de paramMap a queryParamMap para obtener los query parameters
    this.route.queryParamMap.subscribe((params) => {
      this.subjectId = params.get('subjectId');
      this.taskId = params.get('taskId');

      console.log(this.subjectId, this.taskId);

      if (this.subjectId && this.taskId) {
        const subject = this.academicService.getSubjectById(this.subjectId);
        if (subject) {
          this.task =
            subject.assignments.find((a) => a.id === this.taskId) || null;
        }
      }

      this.loading = false;
    });
  }
  async downloadResource(resource: Resource) {
    try {
      await this.showToast('Iniciando descarga...', 'primary');

      const response = await fetch(resource.url);
      const blob = await response.blob();
      const base64Data = await this.blobToBase64(blob);

      await Filesystem.writeFile({
        path: `tasks/${this.task?.id}/${resource.name}`,
        data: base64Data,
        directory: Directory.Documents,
      });

      await this.showToast(`Recurso descargado: ${resource.name}`, 'success');
    } catch (error) {
      console.error('Error downloading resource:', error);
      await this.showToast(
        'Error al descargar el recurso. Por favor intente más tarde.',
        'danger'
      );
    }
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom',
    });
    await toast.present();
  }

  private blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'in progress':
        return 'primary';
      default:
        return 'medium';
    }
  }

  getStatusIcon(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'checkmark-circle-outline';
      case 'pending':
        return 'alert-circle-outline';
      case 'in progress':
        return 'hourglass-outline';
      default:
        return 'help-circle-outline';
    }
  }

  getStatusText(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'Completado';
      case 'pending':
        return 'Pendiente';
      case 'in progress':
        return 'En Progreso';
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

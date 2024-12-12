import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { ToastController } from '@ionic/angular';

interface Resource {
  id: string;
  name: string;
  url: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: string;
  grade: number | null;
  feedback?: string;
  resources: Resource[];
}

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonButton, IonIcon, CommonModule, FormsModule]
})
export class TaskDetailsPage implements OnInit {
  assignments: Assignment[] = [
    {
      id: '1',
      title: 'Evaluación 1 Segundo Parcial',
      description: 'Completar el ejercicio adjunto y subir la solución antes de la fecha límite.',
      dueDate: new Date('2024-12-12'),
      status: 'No entregado',
      grade: null,
      resources: [
        {
          id: '1',
          name: 'evaluacion1.pdf',
          url: 'https://example.com/evaluacion1.pdf'
        }
      ]
    }
  ];

  selectedFile: File | null = null;
  selectedAssignmentId: string | null = null;

  constructor(private toastController: ToastController) { }

  ngOnInit() { }

  async downloadFile(url: string) {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const base64Data = await this.convertBlobToBase64(blob);

      await Filesystem.writeFile({
        path: `tarea_${Date.now()}.pdf`,
        data: base64Data,
        directory: Directory.Documents,
      });

      const toast = await this.toastController.create({
        message: 'Archivo descargado exitosamente.',
        duration: 2000,
        color: 'success',
      });
      await toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Error al descargar el archivo.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }

  selectFile(assignmentId: string) {
    this.selectedAssignmentId = assignmentId;
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/pdf';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        this.toastController.create({
          message: `Archivo seleccionado: ${file.name}`,
          duration: 2000,
          color: 'success',
        }).then(toast => toast.present());
      }
    };
    input.click();
  }

  async uploadTask() {
    if (this.selectedFile && this.selectedAssignmentId) {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Data = reader.result as string;

        // Simulate an upload
        await new Promise(resolve => setTimeout(resolve, 1000));

        const toast = await this.toastController.create({
          message: `Tarea ${this.selectedAssignmentId} subida exitosamente.`,
          duration: 2000,
          color: 'success',
        });
        await toast.present();

        // Reset selection
        this.selectedFile = null;
        this.selectedAssignmentId = null;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  private convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }
}
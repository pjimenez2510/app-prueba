import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonButton, IonIcon, IonList, IonListHeader } from '@ionic/angular/standalone';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { ToastController } from '@ionic/angular';
import { Assignment, Resource } from 'src/app/models/models';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
  standalone: true,
  imports: [IonListHeader, IonList, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonButton, IonIcon, CommonModule, FormsModule]
})
export class TaskDetailsPage implements OnInit {
  task: Assignment | null = null;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    this.task = {
      id: '1',
      title: 'Ejemplo de Tarea',
      description: 'Descripción detallada de la tarea.',
      dueDate: new Date('2024-12-31'),
      status: 'Pendiente',
      grade: null,
      feedback: 'Por favor, entrega esta tarea a tiempo.',
      resources: [
        {
          id: 'r1',
          name: 'Documento de Ejemplo',
          type: 'pdf',
          url: 'https://example.com/guide.docx'
        },
        {
          id: 'r2',
          name: 'Guía de Usuario',
          type: 'docx',
          url: 'https://example.com/guide.docx'
        }
      ]
    };
  }

  async downloadResource(resource: Resource) {
    try {
      const response = await fetch(resource.url);
      const blob = await response.blob();
      const base64Data = await this.blobToBase64(blob);

      await Filesystem.writeFile({
        path: resource.name,
        data: base64Data,
        directory: Directory.Documents
      });

      const toast = await this.toastController.create({
        message: `Recurso descargado: ${resource.name}`,
        duration: 2000,
        color: 'success'
      });
      await toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Error al descargar el recurso.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

  private blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}

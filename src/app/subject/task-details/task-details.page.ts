import { Component, OnInit } from '@angular/core';
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
} from '@ionic/angular/standalone';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { ToastController } from '@ionic/angular';
import { Assignment, Resource } from 'src/app/models/models';

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
  ],
})
export class TaskDetailsPage implements OnInit {
  task: Assignment | null = null;

  constructor(private toastController: ToastController) {}

  ngOnInit() {
    this.task = {
      id: '1',
      title: 'Math Homework',
      description: 'Complete exercises 1 to 10 from chapter 3.',
      dueDate: new Date('2024-12-20'),
      status: 'Pending',
      grade: null,
      feedback: undefined,
      resources: [
        {
          id: 'r1',
          name: 'Chapter 3 PDF',
          type: 'document',
          url: 'https://example.com/chapter3.pdf',
        },
        {
          id: 'r2',
          name: 'Solution Guide',
          type: 'document',
          url: 'https://example.com/solution-guide.pdf',
        },
      ],
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
        directory: Directory.Documents,
      });

      const toast = await this.toastController.create({
        message: `Recurso descargado: ${resource.name}`,
        duration: 2000,
        color: 'success',
      });
      await toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Error al descargar el recurso.',
        duration: 2000,
        color: 'danger',
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

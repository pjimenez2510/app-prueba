import { Component, inject, Inject, OnInit } from '@angular/core';
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
} from '@ionic/angular/standalone';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subject } from '../models/models';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
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
  ],
})
export class SubjectPage implements OnInit {
  subject: Subject | undefined;
  route = inject(ActivatedRoute);

  ngOnInit() {
    const subjectId = this.route.snapshot.paramMap.get('id');
    if (subjectId) {
      this.subject = {
        id: '1',
        name: 'Mathematics',
        professor: 'Dr. Alan Turing',
        credits: 4,
        schedule: { day: 'Monday', time: '10:00 AM - 12:00 PM' },
        status: 'enrolled',
        finalGrade: 90,
        assignments: [
          {
            id: 'a1',
            title: 'Algebra Homework',
            description: 'Solve equations from page 32.',
            dueDate: new Date('2024-12-20'),
            status: 'Completed',
            grade: 95,
            resources: [
              {
                id: 'r1',
                name: 'Algebra Notes',
                type: 'document',
                url: 'https://example.com/algebra-notes',
              },
            ],
          },
        ],
      };
    }
  }
}

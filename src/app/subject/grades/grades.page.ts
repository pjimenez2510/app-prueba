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
} from '@ionic/angular/standalone';

import { TaskListComponent } from '../components/task-list/task-list.component';
import { Assignment, Subject } from 'src/app/models/models';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

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
          },
          {
            id: '2',
            title: 'Science Project',
            description: 'Create a model of the solar system.',
            dueDate: new Date('2024-12-22'),
            status: 'In Progress',
            grade: null,
            feedback: undefined,
            resources: [
              {
                id: 'r3',
                name: 'Solar System Facts',
                type: 'article',
                url: 'https://example.com/solar-system-facts',
              },
            ],
          },
          {
            id: '3',
            title: 'English Essay',
            description:
              "Write an essay on 'The Impact of Technology on Society'.",
            dueDate: new Date('2024-12-25'),
            status: 'Completed',
            grade: 85,
            feedback: 'Good analysis, but improve sentence structure.',
            resources: [],
          },
        ],
      };
    }
  }
}

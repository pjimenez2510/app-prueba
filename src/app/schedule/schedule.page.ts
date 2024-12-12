import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCard, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { Semester, Subject } from '../models/models';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SchedulePage implements OnInit {
  weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  timeSlots = Array.from({ length: 14 }, (_, i) => `${i + 7}:00`); // 7 AM to 8 PM
  currentSemester: Semester | null = null;
  selectedDay: string = this.weekDays[0];

  constructor() {}

  ngOnInit() {
    // Aquí podrías obtener los datos del semestre actual desde un servicio
    this.loadSemesterData();
  }

  loadSemesterData() {
    // Simulated data - replace with actual service call
    this.currentSemester = {
      name: 'Semestre 2024-1',
      subjects: [
        {
          id: '1',
          name: 'Matemáticas',
          professor: 'John Doe',
          credits: 4,
          schedule: { day: 'Lunes', time: '7:00' },
          status: 'enrolled',
          finalGrade: null,
          assignments: []
        }
        // Add more subjects as needed
      ],
      user: { email: 'student@example.com', password: '****' }
    };
  }

  getSubjectsForDayAndTime(day: string, time: string): Subject[] {
    return this.currentSemester?.subjects.filter(
      subject => subject.schedule.day === day && subject.schedule.time === time
    ) || [];
  }

  selectDay(day: string) {
    this.selectedDay = day;
  }

  getDayClasses(day: string) {
    return {
      'selected-day': this.selectedDay === day
    };
  }
}

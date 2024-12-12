import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonButton,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonListHeader,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonListHeader,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    CommonModule,
    FormsModule,
    RouterModule,
    IonListHeader,
  ],
})
export class TabsPage implements OnInit {
  menuItems = [
    { title: 'Home', path: '/tabs/home' },
    { title: 'Grades', path: '/tabs/grades' },
    { title: 'Schedule', path: '/tabs/schedule' },
    { title: 'Tasks', path: '/tabs/tasks' },
  ];
  constructor() {}

  ngOnInit() {}
}

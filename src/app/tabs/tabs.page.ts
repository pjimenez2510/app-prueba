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
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class TabsPage {
  menuItems = [
    { title: 'Home', path: '/tabs/home' },
    { title: 'Calendario', path: '/tabs/schedule' },
  ];
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-enrollment-status',
  templateUrl: './enrollment-status.page.html',
  styleUrls: ['./enrollment-status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EnrollmentStatusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

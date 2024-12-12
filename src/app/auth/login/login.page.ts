import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; // Asegúrate de importar el AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginPage implements OnInit {
  group = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private authService: AuthService) { } // Inyecta el servicio de autenticación

  ngOnInit() { }

  async submit() {
    if (this.group.valid) {
      const { email, password } = this.group.value;
      try {
        const result = await this.authService.login(email, password);
        console.log('Inicio de sesión exitoso', result);
        // Puedes redirigir a otra página o manejar la sesión como desees
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        // Puedes mostrar un mensaje de error al usuario
      }
    }
  }

  async getUserInfo(uid: string) {
    // Implementar lógica para obtener la información del usuario si es necesario
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; /*permite utilizar ngModel en los inputs */
import { AuthService } from '../../../services/auth.service'; /*importa el servicio de autenticación */

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginPageComponent {

  correo: string = ''; /*guarda lo que se ingrese en el campo correo */
  password: string = ''; /*guarda lo que se ingrese en el campo contraseña */

  constructor(private authService: AuthService) {} //Ahora login.ts tiene acceso al servicio

  login(): void {//"Toma el correo y contraseña que escribió el administrador y envíalos al backend."

    console.log('El método login() se ejecutó');
    this.authService.login(this.correo, this.password).subscribe({
      next: (respuesta) => {
        console.log('Inicio de sesión exitoso:', respuesta);
        // Aquí puedes redirigir al usuario a otra página o realizar otras acciones después del inicio de sesión exitoso
      },

      
      error: (error) => {
        console.error('Error al iniciar sesión:', error);
        // Aquí puedes mostrar un mensaje de error al usuario
      }

    });
  }


}

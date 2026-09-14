import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/v1/auth'; // la url del backend para la autenticación

  constructor(private http: HttpClient) {}
  login(correo: string, password: string): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/login`,//envia a angular una petición post al backend para que este verifique si el correo y la contraseña son correctos
      {
        correo: correo,
        password: password
      }
    );

  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, public router: Router,) {}

  async onSubmit() {
    try {
      this.authService.login(this.email, this.password).then(user => {
        this.router.navigate(['home']);
        console.log('Usuário autenticado com sucesso!');
      });
      // Redirecionar para a página após o login
    } catch (error) {
      console.error(error);
      // Tratar erro de autenticação
    }
  }
}

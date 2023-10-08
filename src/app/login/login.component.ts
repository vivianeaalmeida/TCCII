import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, public router: Router, public dialog: MatDialog) {}

  async onSubmit() {
    try {
      this.authService.login(this.email, this.password).then(user => {
        this.router.navigate(['home']);
        console.log('Usuário autenticado com sucesso!');
      }).catch(erro => {
        this.openDialog();
        console.error('Erro:', erro); // Será executado se a Promise for rejeitada. Login errado, conexão invalida etc. != status 200. 
      });
      // caso dê erro de execução do meu código. Ex: null pointer
    } catch (error) {
      this.openDialog();
      console.error(error);
      // Tratar erro de autenticação
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px', 
      data: {message : 'E-mail/Senha Incorretos', type: 'ERROR'}
    });
  }

}


/*popup-success popup-error
[ngClass]="step == 'step1' ? 'my_class1' : 'my_class2'"
*/
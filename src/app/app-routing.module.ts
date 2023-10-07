import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { RegistrosComponent } from './registros/registros.component';
import { TurmasComponent } from './turmas/turmas.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { ConfigComponent } from './config/config.component';
import { FotosComponent } from './fotos/fotos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'src/services/auth.service';

//rotas
//fiz 13 a ...; inseri routermodule no imports e adicionei o campo export em ngModule
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '' , component: ContentPageComponent, canActivate: [AuthService],
    children: [
      {path: 'home', component: HomeComponent , canActivate: [AuthService]},
      {path: 'content-page', component: ContentPageComponent , canActivate: [AuthService]},
      {path: 'registros', component: RegistrosComponent , canActivate: [AuthService]},
      {path: 'turmas', component: TurmasComponent , canActivate: [AuthService]},
      {path: 'mensagens', component: MensagensComponent , canActivate: [AuthService]},
      {path: 'configuracoes', component: ConfigComponent , canActivate: [AuthService]},
      {path: 'fotos', component: FotosComponent , canActivate: [AuthService]},
      {path: 'calendario', component: CalendarioComponent , canActivate: [AuthService]},
    ]
  },
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

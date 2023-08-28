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

//rotas
//fiz 13 a ...; inseri routermodule no imports e adicionei o campo export em ngModule
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'content-page', component: ContentPageComponent},
  {path: 'registros', component: RegistrosComponent},
  {path: 'turmas', component: TurmasComponent},
  {path: 'mensagens', component: MensagensComponent},
  {path: 'configuracoes', component: ConfigComponent},
  {path: 'fotos', component: FotosComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

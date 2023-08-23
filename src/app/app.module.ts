import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { ContentPageComponent } from './content-page/content-page.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrosComponent } from './registros/registros.component';
import { TurmasComponent } from './turmas/turmas.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { ConfigComponent } from './config/config.component';

//rotas
//fiz 13 a 15; inseri routermodule no imports e adicionei o campo export
const routes: Routes = [
  {path: 'content-page', component: ContentPageComponent},
  {path: 'registros', component: RegistrosComponent},
  {path: 'turmas', component: TurmasComponent},
  {path: 'mensagens', component: MensagensComponent},
  {path: 'configuracoes', component: ConfigComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentPageComponent,
    RegistrosComponent,
    TurmasComponent,
    MensagensComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule, 
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

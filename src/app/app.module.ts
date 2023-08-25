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
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentPageComponent,
    RegistrosComponent,
    TurmasComponent,
    MensagensComponent,
    ConfigComponent,
    HomeComponent
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

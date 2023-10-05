import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//import { DragCompComponent } from './view/drag-comp/drag-comp.component';


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
import { FotosComponent } from './fotos/fotos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ReunioesComponent } from './reunioes/reunioes.component';
import { EventosComponent } from './eventos/eventos.component';
import { FirebaseService } from 'src/services/firebaseService';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentPageComponent,
    RegistrosComponent,
    TurmasComponent,
    MensagensComponent,
    ConfigComponent,
    HomeComponent,
    FotosComponent,
    CalendarioComponent,
    ReunioesComponent,
    EventosComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule, 
    MatDialogModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

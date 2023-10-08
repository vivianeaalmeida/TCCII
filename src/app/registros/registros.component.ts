import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Register } from '../../interfaces/register';
import { FirebaseService } from 'src/services/firebaseService';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Student } from '../../interfaces/student';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {
  
  idValue?: string = '';
  selectStudent: string = '';
  selectDate: Date = new Date;
  sleepValue: string = '';
  mealValue: string = '';
  activitiesValue: string = '';
  healthValue: string = '';
  incidentsValue: string = '';
  
  /*
  students: {id:string, name:string}[] = [{id: '123', name: 'Viviane'}, {id: '234', name: 'Marcelo'}]*/

  students: Student[] = [];

  //declaração da variavel
  isSonoOpened:boolean = false;
  isAlimentacaoOpened:boolean = false;
  isAtividadesOpened:boolean = false;
  isSaudeOpened:boolean = false;
  isIncidentesOpened:boolean = false;

  
  constructor(private firebaseService: FirebaseService, public dialog: MatDialog, private authService: AuthService) {
    
  }
  ngOnInit(): void {
    this.firebaseService.getStudents().then(response => this.students = response);
  }
  //o array students recebe a response.

  onChangeSearch(valor: any){
    if(this.selectStudent && this.selectDate){
      this.firebaseService.getRegistersByStudentAndDate(this.selectStudent, 
      this.convertDateToString(this.selectDate)).then(response => {
        if(response){
          console.log(response)
          this.idValue = response.id;
          this.sleepValue = response.sleep;
          this.mealValue = response.meal;
          this.activitiesValue = response.activities;
          this.healthValue = response.health;
          this.incidentsValue = response.incidents;

          this.isSonoOpened = true;
          this.isAlimentacaoOpened = true;
          this.isAtividadesOpened = true;
          this.isSaudeOpened = true;
          this.isIncidentesOpened = true;
        
        } else {
          this.sleepValue = '';
          this.mealValue = '';
          this.activitiesValue = '';
          this.healthValue = '';
          this.incidentsValue = '';

          this.isSonoOpened = false;
          this.isAlimentacaoOpened = false;
          this.isAtividadesOpened = false;
          this.isSaudeOpened = false;
          this.isIncidentesOpened = false;
        }
      });
    }
  }


  //criacao da funcao para o click, alternando entre true e false.
  clickSono(){
    this.isSonoOpened = !this.isSonoOpened;
  }
  
  clickAlimentacao(){
    this.isAlimentacaoOpened = !this.isAlimentacaoOpened;
  }

  clickAtividades(){
    this.isAtividadesOpened = !this.isAtividadesOpened;
  }

  clickSaude(){
    this.isSaudeOpened = !this.isSaudeOpened;
  }

  clickIncidentes(){
    this.isIncidentesOpened = !this.isIncidentesOpened;
  } 

  /*
  showButton */
  showButton(){
    return this.authService.getUserData().role === 'PROFESSOR';
  }

 

  //salvar registros
  save(){

    if(this.selectStudent && this.selectDate){
      let register: Register = {
        idStudent: this.selectStudent,
        sleep: this.sleepValue,
        meal: this.mealValue,
        activities: this.activitiesValue,
        health: this.healthValue,
        incidents: this.incidentsValue,
        occurenceDate: this.convertDateToString(this.selectDate)
      }
  
      if(this.idValue){
        console.log(this.idValue)
        this.firebaseService.editRegister(this.idValue, register);
      } else {
        this.firebaseService.saveRegister(register);
      }
      this.openDialog('Registro salvo com sucesso', 'SUCCESS');
    } else {
      this.openDialog('Erro ao salvar registro. Selecione aluno e data.', 'ERROR')
    }
  }

  openDialog(message: string, type: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px', 
      data: {message, type}
    });
  }

  convertDateToString(data: Date): string{
    const ano = data.getFullYear(); 
    const mes = String(data.getMonth() + 1).padStart(2, '0'); 
    const dia = String(data.getDate()).padStart(2, '0'); 

    const dataString = `${dia}/${mes}/${ano}`; 
    return dataString;
  }


}

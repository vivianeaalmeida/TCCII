import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Register } from '../interfaces/register';
import { FirebaseService } from 'src/services/firebaseService';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Student } from '../interfaces/student';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {
  
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

  
  constructor(private firebaseService: FirebaseService, public dialog: MatDialog) {
    
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
          this.sleepValue = response.sleep;
          this.mealValue = response.meal;
          this.activitiesValue = response.activities;
          this.healthValue = response.health;
          this.incidentsValue = response.incidents;
        } else {
          this.sleepValue = '';
          this.mealValue = '';
          this.activitiesValue = '';
          this.healthValue = '';
          this.incidentsValue = '';
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

  //salvar registros
  save(){
    console.log(this.selectStudent)
    console.log(this.selectDate)
    console.log(this.sleepValue)
    console.log(this.mealValue)
    console.log(this.activitiesValue)
    console.log(this.healthValue)
    console.log(this.incidentsValue)   

    let register: Register = {
      idStudent: this.selectStudent,
      sleep: this.sleepValue,
      meal: this.mealValue,
      activities: this.activitiesValue,
      health: this.healthValue,
      incidents: this.incidentsValue,
      occurenceDate: this.convertDateToString(this.selectDate)
    }

    this.firebaseService.saveRegister(register);
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px', 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('O popup foi fechado');
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

import { Component } from '@angular/core';
import {FirebaseService} from 'src/services/firebaseService'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cidade:string = '';

  constructor(private firebaseService: FirebaseService) {
   
  }


  getAlunos(){
   
  }

  
}

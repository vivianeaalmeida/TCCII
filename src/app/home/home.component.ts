import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import {FirebaseService} from 'src/services/firebaseService'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name:string = '';
  role: string = '';

  constructor(private authService: AuthService) {
   
  }
  ngOnInit(): void {
    let promiseUser = this.authService.getUserData();
    promiseUser.then(user => {
      this.name = user.name;
      this.role = user.role;
    })
    
  }


  getAlunos(){
   
  }

  

  
}

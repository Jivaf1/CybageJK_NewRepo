import { Component, OnInit } from '@angular/core';
import { NgForm ,FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user={
    userName:"",
    password:""
  };

  onSubmit(userForm:NgForm){
    console.log(userForm.value);
  }
}

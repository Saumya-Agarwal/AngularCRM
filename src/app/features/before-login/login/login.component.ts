import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  correctEmailId = 'abc@gmail.com';
  correctPassword = 'abcd';
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  credentialsSubmission(details: any) {
    console.log(details)
    if (details.email === '' || details.password === '') {
      alert("Please enter the mandatory details!")
    } else if(details.email === this.correctEmailId && details.password === this.correctPassword) {
      console.log("You are logged in!");
      this.router.navigate(['/after-login']);
    } else {
    alert('the details u entered are incorrect!')
  }
  }

}

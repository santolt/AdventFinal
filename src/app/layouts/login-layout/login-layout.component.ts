import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {

  formLogin: FormGroup;

  constructor(private router: Router, public formBuilder: FormBuilder) { 
    this.formLogin = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }


  goDashboard():void{
    this.router.navigate(["/dashboard"])
  }
  
  send():any{
    
  }
}

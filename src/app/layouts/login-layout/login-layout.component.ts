import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {

  formLogin: FormGroup;
  loading: boolean = false;

  constructor( public formBuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router ) { 
    this.formLogin = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required,]]
    })
  }


  loginIn(){
    console.log(this.formLogin);
    
    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;

    if(email === 'ssuarez@lean-tech.io' && password === '123456.,'){
      this.fakeLoading()
    }else{
      this.error()
    }
  }

  error(){
    this._snackBar.open('User or Password was incorrect!!', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })

  }

  fakeLoading(){
    this.loading = true;

    setTimeout(() => {
      this.router.navigate(['containers'])
    }, 1500);
  }


}

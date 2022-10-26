import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 
  Form!: FormGroup ;

  constructor( 
    private router : Router, 
    private authService : AuthService
  ) { 
    this.builform();
  }

  private builform(): void {
    this.Form = new FormGroup({
      username: new FormControl( 'cristian@gmail.com', [Validators.required, Validators.email]), 
      password: new FormControl( '12345678', Validators.required),
      rememberMe: new FormControl(false)
    });
  }

  ngOnInit(): void { 
  }

  onLogin(): void {
    const userLogin = this.Form.getRawValue();
    this.authService.signIn(userLogin).subscribe((resp) => {
      this.onList();  
    });
  }

  onList(): void {
    this.router.navigate(['/components/lista']) 
  }

}

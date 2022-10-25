import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm!: NgForm;
  Form!: FormGroup ;

  constructor(
    private formBuilder: FormBuilder,
    private router : Router
  ) { 
    this.builform();
  }

  private builform(): void {
    this.Form = this.formBuilder.group({
      username: ['cristian@gmail.com', [Validators.required, Validators.email]], 
      password: ['12345678', Validators.required],
      rememberMe: [false]  
    });
  }

  ngOnInit(): void { 
  }

  onList(){
    this.router.navigate(['components/lista'])
    this.signInNgForm.resetForm();
  }

}

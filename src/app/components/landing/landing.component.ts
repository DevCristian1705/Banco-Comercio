import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  Fecha = new Date();
  AnioActual = this.Fecha.getFullYear();

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }


  onLogin(){
    this.router.navigate(['/auth'])
  }
}

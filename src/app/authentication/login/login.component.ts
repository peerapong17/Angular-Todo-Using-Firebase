import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string
  password:string

  constructor(private router:Router, public authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  register():void {
    this.router.navigate(['register'])
  }

  login(){
    this.authService.signIn(this.email, this.password)
  }


}

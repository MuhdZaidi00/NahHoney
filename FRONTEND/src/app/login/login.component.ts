import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  email: any;
  password: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private service: ApiserviceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  //boleh insert admin di sini
      login() {

        if(this.email == "admin1@gmail.com" && this.password == '1234'){
          alert("Welcome to Bakery Shop")
          this.router.navigate(['home'])
        }
        else if (this.email == "admin2@gmail.com" && this.password == '1234'){
          alert("Welcome to Bakery Shop")
          this.router.navigate(['home'])
    
        }
        else{
          alert("You are not a user!!")
        }
    
      }
    
    }

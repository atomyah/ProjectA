import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../common.css','./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  authService: AuthService) { }

  ngOnInit() {
  }

}

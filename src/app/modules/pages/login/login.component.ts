import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/interfaces/interfaces';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ClassMapperService } from 'src/app/services/class-mapper.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  standalone: true,
  selector: 'rec-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule, MaterialModule],
})
export class LoginComponent implements OnInit {
  loginData: LoginData = {
    email: '',
    pass: '',
  };
  loginError: boolean = false;
  loginSending: boolean = false;

  constructor(
    private as: ApiService,
    private us: UserService,
    private router: Router,
    private auth: AuthService,
    private cms: ClassMapperService
  ) {}

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/main']);
    }
  }

  doLogin(f: NgForm): void {
    this.loginSending = true;

    this.as.login(this.loginData).subscribe((result) => {
      this.loginSending = false;
      if (result.status == 'error') {
        this.loginError = true;
      }
      if (result.status == 'ok') {
        this.us.logged = true;
        this.us.user = this.cms.getUser(result.user);
        this.us.saveLogin();

        this.router.navigate(['/main']);
      }
    });
  }
}

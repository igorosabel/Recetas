import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResult, RegisterData } from 'src/app/interfaces/interfaces';
import { Utils } from 'src/app/model/utils.class';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ApiService } from 'src/app/services/api.service';
import { ClassMapperService } from 'src/app/services/class-mapper.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  standalone: true,
  selector: 'rec-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule, MaterialModule],
})
export default class RegisterComponent implements OnInit {
  registerData: RegisterData = {
    name: '',
    email: '',
    pass: '',
    conf: '',
  };
  registerNameError: boolean = false;
  registerEmailValidateError: boolean = false;
  registerEmailError: boolean = false;
  registerPassError: boolean = false;
  registerSending: boolean = false;

  constructor(
    private as: ApiService,
    private us: UserService,
    private router: Router,
    private cms: ClassMapperService
  ) {}

  ngOnInit(): void {}

  doRegister(): void {
    let validate: boolean = true;
    if (
      this.registerData.name === '' ||
      this.registerData.email === '' ||
      this.registerData.pass === '' ||
      this.registerData.conf === ''
    ) {
      return;
    }

    this.registerNameError = false;
    this.registerEmailValidateError = false;
    this.registerEmailError = false;
    this.registerPassError = false;

    if (!Utils.validateEmail(this.registerData.email)) {
      this.registerEmailValidateError = true;
      validate = false;
    }
    if (this.registerData.pass !== this.registerData.conf) {
      this.registerPassError = true;
      validate = false;
    }

    if (!validate) {
      return;
    }
    this.registerSending = true;
    this.as
      .register(this.registerData)
      .subscribe((result: LoginResult): void => {
        this.registerSending = false;
        if (result.status === 'ok') {
          this.us.logged = true;
          this.us.user = this.cms.getUser(result.user);
          this.us.saveLogin();

          this.router.navigate(['/main']);
        } else {
          if (result.status === 'error-user') {
            this.registerNameError = true;
          }
          if (result.status === 'error-email') {
            this.registerEmailError = true;
          }
        }
      });
  }
}

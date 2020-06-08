import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { NgForm }            from '@angular/forms';
import { LoginData }         from '../../interfaces/interfaces';
import { ApiService }        from '../../services/api.service';
import { UserService }       from '../../services/user.service';
import { CommonService }     from '../../services/common.service';
import { DataShareService }  from '../../services/data-share.service';
import { AuthService }       from '../../services/auth.service';

@Component({
	selector: 'rec-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginData: LoginData = {
		email: '',
		pass: ''
	};
	loginError: boolean = false;
	loginSending: boolean = false;

	constructor(private as: ApiService,
				private user: UserService,
				private cs: CommonService,
				private router: Router,
				private dss: DataShareService,
				private auth: AuthService) {}

	ngOnInit(): void {
		if (this.auth.isAuthenticated()) {
			this.router.navigate(['/main']);
		}
	}

	doLogin(f: NgForm) {
		this.loginSending = true;

		this.as.login(this.loginData).subscribe(result => {
			this.loginSending = false;
			if (result.status=='error') {
				this.loginError = true;
			}
			if (result.status=='ok') {
				this.user.logged = true;
				this.user.id     = result.id;
				this.user.token  = this.cs.urldecode(result.token);
				this.user.email  = this.loginData.email;
				this.user.saveLogin();

				this.router.navigate(['/main']);
			}
		});
	}
}
import { Injectable }       from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService }      from 'src/app/services/user.service';

@Injectable()
export class AuthService {
	constructor(private us: UserService) {}

	public isAuthenticated(): boolean {
		this.us.loadLogin();
		const helper = new JwtHelperService();
		return !helper.isTokenExpired(this.us.user?.token);
	}
}

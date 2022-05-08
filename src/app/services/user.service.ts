import { Injectable } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';
import { User } from 'src/app/model/user.model';
import { UserInterface } from 'src/app/interfaces/interfaces';

@Injectable()
export class UserService {
	logged: boolean = false;
	user: User = null;

	constructor(private dss: DataShareService) {}

	loadLogin(): void {
		const loginObj: UserInterface = JSON.parse(this.dss.getGlobal('login'));
		if (loginObj === null) {
			this.logout();
		}
		else {
			this.logged = true;
			this.user = new User().fromInterface(loginObj);
		}
	}

	saveLogin(): void {
		this.dss.setGlobal('login', this.user.toInterface());
	}

	logout(): void {
		this.logged = false;
		this.user = null;
		this.dss.removeGlobal('login');
	}
}

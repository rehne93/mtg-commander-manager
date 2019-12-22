import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    // TODO: Authentifizierung mit Backend implementieren
    validate() {
      this.router.navigateByUrl('/userView').finally();
    }

}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginF: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    }
  );

  constructor(private loginSrv: LoginService) {

  }


  onLogin(): void {
    if (this.loginF.invalid) { return; }
    console.log(this.loginF.value);
    this.loginSrv.login(this.loginF.value).subscribe(function (res: any) {
      if (res.code == 400) {
        alert(res.message);
      } else {
        let jsonData = JSON.stringify(res.result);
        sessionStorage.setItem('login', jsonData);
        location.assign('/');
      }
      
    });
  }
}


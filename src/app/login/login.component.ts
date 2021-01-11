import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../_shared/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]+')])],
      password: [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]+')])]
    })
  }

  sendLoginRequest() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.loginForm.value.login, this.loginForm.value.password)
      .subscribe(
        () => {
          this.router.navigate(['/home']);
        },
      );
  }
}

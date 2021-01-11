import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public myform: FormGroup;
  public email: FormControl;
  public nickname: FormControl;
  public password: FormControl;
  title: string;

  constructor() {
  }

  onInit() {
    console.log("Henlo");
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log('Form Submitted');
    }
  }

  onClear() {
    this.myform.reset();
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {

    this.nickname = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [Validators.required,
      Validators.minLength(8)]);
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        email: this.email,
        nickname: this.nickname,
        password: this.password
      })
    });
  }

}

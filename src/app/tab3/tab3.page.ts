import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  signupform: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupform = this.fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      phoneNumber: ['', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(10)]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]],
      confirmPassword: ['', [Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]],


    });
  }

}

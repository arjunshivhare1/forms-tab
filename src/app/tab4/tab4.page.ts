import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
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

  ngOnInit() {
  }

}

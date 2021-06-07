import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  signup: FormGroup;

  constructor(private insta: FormBuilder) {
    this.signup =this.insta.group({
      name: ['', [Validators.required,]],
      address: ['', [Validators.required, Validators.maxLength(250)]],
      flatno: ['', [Validators.required, Validators.maxLength(10)]],
      streetname: ['', [Validators.required,]],
      landmark: ['', [Validators.required,]],
      pincode: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(5)]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
    }); }

  ngOnInit() {
  }

}

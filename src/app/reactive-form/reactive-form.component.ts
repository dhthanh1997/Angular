import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  signInForm : FormGroup | any;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({ // Form Builder
      ReactiveForm: this.fb.group({
        username: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.email,
        ]),],
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(4),
        ]),],
        phone: ['', Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.pattern("^[0-9]*$"),
        ]),],
      }),
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }



}

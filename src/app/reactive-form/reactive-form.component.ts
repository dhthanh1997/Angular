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
    this.signInForm = this.fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ]),],
      password: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup): void {
    console.log(form.value);
  }

}

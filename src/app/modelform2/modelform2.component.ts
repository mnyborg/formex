import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";



interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  }
}


@Component({
  selector: 'app-modelform2',
  templateUrl: './modelform2.component.html',
  styleUrls: ['./modelform2.component.css']
})

export class Modelform2Component implements OnInit {

  user: FormGroup;

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl(''),
      account: new FormGroup({
        email: new FormControl(''),
        confirm: new FormControl('')
      })
    });
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    console.log(value, valid);
  }
}

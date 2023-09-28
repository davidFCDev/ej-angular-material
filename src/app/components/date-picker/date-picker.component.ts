import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  reserveForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.reserveForm = this.formBuilder.group({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
  }

  ngOnInit(): void {}
}

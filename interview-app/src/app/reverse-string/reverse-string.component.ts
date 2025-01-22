import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse-string',
  templateUrl: './reverse-string.component.html',
  styleUrls: ['./reverse-string.component.css']
})
export class ReverseStringComponent implements OnInit {
  inputString: string = '';
  reversedString: string = '';

  updateReversedString() {
    this.reversedString = this.inputString.split('').reverse().join('');
  }

  constructor() { }

  ngOnInit(): void {
  }

}

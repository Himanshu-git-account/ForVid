import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {MDCTextField} from '@material/textfield';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	@ViewChild('emailForm') emailFormEl: ElementRef;
	public emailForm;

  constructor() {}

  ngOnInit() {
  	this.emailForm = new MDCTextField(this.emailFormEl.nativeElement);
  }

}
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {MDCTextField} from '@material/textfield';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	@ViewChild('emailForm') emailFormEl: ElementRef;
	public emailForm;

	public isSmallScreen= false;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
  	this.emailForm = new MDCTextField(this.emailFormEl.nativeElement);

  	this.breakpointObserver
      .observe(['(max-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSmallScreen = true;
        } else {
          this.isSmallScreen = false;
        }
      });
  }

}
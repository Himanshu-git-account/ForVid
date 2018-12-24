import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MDCDrawer, MDCDrawerFoundation} from "@material/drawer";
import { MDCTopAppBar } from '@material/top-app-bar';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') drawerEl: ElementRef;
  private drawer;

  @ViewChild('topAppBar') topAppBarEl: ElementRef;
  private topAppBar;
  
  constructor() {}

  ngOnInit() {
    this.drawer = new MDCDrawer(this.drawerEl.nativeElement);
    this.topAppBar = new MDCTopAppBar(this.topAppBarEl.nativeElement);
  }

  ngAfterViewInit() {
    
  }

  public toggleDrawer(): void {
    this.drawer.open = true;
  }

}

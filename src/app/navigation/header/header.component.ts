import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MDCDrawer, MDCDrawerFoundation} from "@material/drawer";
import { MDCTopAppBar } from '@material/top-app-bar';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') drawerEl: ElementRef;  // see header.component.html  1 line
  private drawer;

  @ViewChild('topAppBar') topAppBarEl: ElementRef; // see header.component.html  22 line
  private topAppBar;
  
  constructor() {}

  ngOnInit() {
    // We got elements through @ViewChild and initialize them
    this.drawer = new MDCDrawer(this.drawerEl.nativeElement);
    this.topAppBar = new MDCTopAppBar(this.topAppBarEl.nativeElement);
  }

  ngAfterViewInit() {
    
  }

  public toggleDrawer(): void {
    // Use provided functional to open drawer
    this.drawer.open = true;
  }

}

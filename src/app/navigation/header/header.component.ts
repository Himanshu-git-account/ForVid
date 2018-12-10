import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MDCDrawer, MDCDrawerFoundation} from "@material/drawer";

declare var mdc: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('drawer') drawerEl: ElementRef;
  private drawer;

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    let drawer = new MDCDrawerFoundation(this.drawerEl);
    drawer.init();
  }

  public toggleDrawer(): void {
    this.drawer.open();
  }

}

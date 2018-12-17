import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MDCDrawer, MDCDrawerFoundation} from "@material/drawer";



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
    this.drawer = new MDCDrawer(this.drawerEl.nativeElement);
  }

  ngAfterViewInit() {
    
  }

  public toggleDrawer(): void {
    this.drawer.open = true;
  }

}

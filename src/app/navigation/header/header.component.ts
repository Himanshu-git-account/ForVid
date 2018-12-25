import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MDCDrawer } from "@material/drawer";
import { MDCTopAppBar } from '@material/top-app-bar';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('drawer') drawerEl: ElementRef;  // see header.component.html  Line 1 Column 8
  private drawer;

  @ViewChild('topAppBar') topAppBarEl: ElementRef; // see header.component.html  Line 22 Column 35
  private topAppBar;

  public isSmallScreen: boolean;
  
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    // We got elements through @ViewChild and initialize them
    this.drawer = new MDCDrawer(this.drawerEl.nativeElement);
    this.topAppBar = new MDCTopAppBar(this.topAppBarEl.nativeElement);

    // Is used to change topAppBar to topAppBar--prominent
    // See header.component.html  Line 22 Column 59
    this.breakpointObserver
      .observe(['(max-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSmallScreen = true;
        } else {
          this.isSmallScreen = false;
          // To close drawer on desktops, not needed there
          this.drawer.open = false;
        }
      });
  }

  public toggleDrawer(): void {
    // Use provided functional to open drawer
    this.drawer.open = true;
  }

}

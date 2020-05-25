import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  clickedDiv1: boolean;
  clickedDiv2: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  onDiv1() {
    this.clickedDiv1 = true;
    this.clickedDiv2 = false;
  }

  onDiv2() {
    this.clickedDiv1 = false;
    this.clickedDiv2 = true;

  }
}

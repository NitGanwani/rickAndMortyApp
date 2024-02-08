import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css'],
})
export class LayoutPageComponent {
  public sideBarItems = [
    { label: 'List', icon: 'label', url: './list' },
    { label: 'Table', icon: 'table', url: './table' },
    { label: 'Search', icon: 'search', url: './search' },
  ];

  constructor(private router: Router) {}

  navigateToList() {
    this.router.navigate(['characters/list']);
  }
}

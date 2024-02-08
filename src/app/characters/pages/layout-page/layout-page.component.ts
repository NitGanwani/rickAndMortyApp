import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [],
})
export class LayoutPageComponent {
  public sideBarItems = [
    { label: 'List', icon: 'label', url: './list' },
    { label: 'Table', icon: 'table', url: './table' },
    { label: 'Search', icon: 'search', url: './search' },
  ];
}

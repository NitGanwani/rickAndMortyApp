import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [],
})
export class LayoutPageComponent {
  public sideBarItems = [
    { label: 'List', icon: 'label', url: './list' },
    { label: 'Edit', icon: 'edit', url: './edit-character' },
    { label: 'Search', icon: 'search', url: './search' },
  ];
}

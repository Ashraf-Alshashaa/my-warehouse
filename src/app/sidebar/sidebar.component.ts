import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Nav } from './types';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sidebarClass: string = 'sidebar';
  changeClass() {
    // Change the class based on some condition or logic.
    if (this.sidebarClass === 'sidebar') {
      this.sidebarClass = 'shrinking-sidebar';
    } else {
      this.sidebarClass = 'sidebar';
    }
  }
  @Input() nav!: Nav;
  navList: Nav[] = [
    {
      name: 'Create Order',
      icon: 'add_circle',
      route: 'create-order',
    },
    {
      name: 'Sales',
      icon: 'real_estate_agent',
      route: 'sales',
    },
    {
      name: 'Inventory',
      icon: 'inventory',
      route: 'inventory',
    },
    {
      name: 'Expenses',
      icon: 'payments ',
      route: 'expenses',
    },
    {
      name: 'Reports',
      icon: 'bar_chart_4_bars',
      route: 'reports',
    },
  ];
}

import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';


menuItems: MenuItem[] = [
  {
    Name: 'Cheeseburger',
    Category: 'Sandwich',
    Price: 9.99,
    
  },
  {
    Name: 'Caesar Salad',
    Category: 'Salad',
    Price: 7.99,
    
  },
  {
    Name: 'Margherita Pizza',
    Category: 'Pizza',
    Price: 12.99,
    
  }
];

getByCategory(cat: string): MenuItem[] {
  return this.menuItems.filter(item => item.Category === cat);
}
}


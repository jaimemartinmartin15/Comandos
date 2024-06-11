import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { COMMANDS_LIST } from './menu-links';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public readonly COMMANDS_LIST = COMMANDS_LIST;
}

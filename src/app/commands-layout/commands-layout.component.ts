import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderPrintComponent, ResponsiveLayoutComponent } from '@jaimemartinmartin15/jei-devkit-angular-shared';
import { COMMANDS_LIST } from '../menu/menu-links';

@Component({
  selector: 'app-commands-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ResponsiveLayoutComponent, HeaderPrintComponent],
  templateUrl: './commands-layout.component.html',
  styleUrls: ['./commands-layout.component.scss'],
})
export class CommandsLayoutPageComponent {
  public isShowingLeftMenu: boolean = false;
  public readonly COMMANDS = COMMANDS_LIST;

  public showHideBackLink(showLeftMenu: boolean) {
    // Avoid error ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => (this.isShowingLeftMenu = showLeftMenu), 0);
  }
}

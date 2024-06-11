import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderPrintModule } from '../components/header-print/header-print.module';
import { ResponsiveLayoutModule } from '../components/responsive-layout/responsive-layout.module';
import { COMMANDS_LIST } from '../menu/menu-links';

@Component({
  selector: 'app-commands-layout-page',
  standalone: true,
  imports: [CommonModule, ResponsiveLayoutModule, HeaderPrintModule],
  templateUrl: './commands-layout-page.component.html',
  styleUrls: ['./commands-layout-page.component.scss'],
})
export class CommandsLayoutPageComponent {
  public isShowingLeftMenu: boolean = false;
  public readonly COMMANDS = COMMANDS_LIST;

  public showHideBackLink(showLeftMenu: boolean) {
    // Avoid error ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => (this.isShowingLeftMenu = showLeftMenu), 0);
  }
}

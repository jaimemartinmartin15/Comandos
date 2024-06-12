import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TerminalCodeComponent } from '@jaimemartinmartin15/jei-devkit-angular-shared';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [CommonModule, TerminalCodeComponent],
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
})
export class HostComponent {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TerminalCodeComponent } from '@jaimemartinmartin15/jei-devkit-angular-shared';

@Component({
  selector: 'app-find',
  standalone: true,
  imports: [CommonModule, TerminalCodeComponent],
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent {}

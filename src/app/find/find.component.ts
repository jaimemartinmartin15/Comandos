import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TerminalCodeModule } from '../components/terminal-code/terminal-code.module';

@Component({
  selector: 'app-find',
  standalone: true,
  imports: [CommonModule, TerminalCodeModule],
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent {}

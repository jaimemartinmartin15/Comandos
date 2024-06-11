import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TerminalCodeModule } from '../components/terminal-code/terminal-code.module';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [CommonModule, TerminalCodeModule],
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.scss'],
})
export class IfComponent {}

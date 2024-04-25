import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [HomeComponent,CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  userSelected: string | undefined;
  compSelected: string | undefined;
  status: string | undefined;
  

  
}

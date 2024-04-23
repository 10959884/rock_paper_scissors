import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userScore = 0;
  compScore = 0;
  userSelected: string | undefined;
  compSelected: string | undefined;
  action: string | undefined;
  status: string | undefined;
  compWeapons = [
    'rock',
    'paper',
    'scissors'
  ];

  userPick(userWeapon: string): void {
    this.userSelected = userWeapon;
    const randomNum = Math.floor(Math.random() * 3);
    this.compSelected = this.compWeapons[randomNum];
  
  
    const compSelectedElement = document.getElementById(`comp-${this.compSelected}`);
    if (compSelectedElement) {
      compSelectedElement.classList.add('highlight');
      setTimeout(() => {
        compSelectedElement.classList.remove('highlight');
      }, 1000); 
    }
  
    this.checkResult();
  }
  

  clearField() {
    setTimeout(() => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
    }, 1500);
  }

  win(user: string | undefined, comp: string | undefined) {
    this.userScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'beats';
    this.status = ' You win!';
    this.clearField();
  }


  lose(user: string | undefined, comp: string | undefined) {
    this.compScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'loses to';
    this.status = ' You lose!';
    this.clearField();
  }

  draw(user: string | undefined, comp: string | undefined) {
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'and';
    this.status = ' You draw!';
    this.clearField();
  }

  checkResult() {
    const userChoice = this.userSelected!;
    const compChoice = this.compSelected!;
    switch (userChoice + compChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        this.win(userChoice, compChoice);
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        this.lose(userChoice, compChoice);
        break;
      default:
        this.draw(userChoice, compChoice);
        break;
    }
  }
  
}
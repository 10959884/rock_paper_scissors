import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {


  compWeapons = [
    'rock',
    'paper',
    'scissors'
  ];

  userScore = 0;
  compScore = 0;
  userSelected: string | undefined;
  compSelected: string | undefined;
  status: string | undefined;
  playAgain = false;

  constructor(private service: ServiceService) { }

  userPick(userWeapon: string): void {
    this.userSelected = userWeapon;
    const randomNum = Math.floor(Math.random() * 3);
    this.compSelected = this.compWeapons[randomNum];
    this.playAgain = true;
    


    const compSelectedElement = document.getElementById(`comp-${this.compSelected}`);
    if (compSelectedElement) {
      compSelectedElement.classList.add('highlight');
      setTimeout(() => {
        compSelectedElement.classList.remove('highlight');
      }, 1000);
    }

    this.checkResult();
  }

  resetGame(): void {
    this.userSelected = undefined;
    this.compSelected = undefined;
    this.playAgain = false;

  }


  clearField() {
    // setTimeout(() => {
    //   this.status = '';
    //   this.userSelected = '';
    //   this.compSelected = '';
    // }, 1500);
  }


  win(user: string | undefined, comp: string | undefined) {
    this.userScore++;
    this.userSelected = user;
    this.compSelected = comp;
    this.status = ' You win!';
    this.service.updateUserScore(this.userScore)

    this.clearField();
  }


  lose(user: string | undefined, comp: string | undefined) {
    this.compScore++;
    this.userSelected = user;
    this.compSelected = comp;
    this.status = ' You lose!';
    this.service.updateCompScore(this.compScore)
    this.clearField();
  }

  draw(user: string | undefined, comp: string | undefined) {
    this.userSelected = user;
    this.compSelected = comp;
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


  openPopup(): void {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.classList.add("open-popup");
    }
  }

  closePopup(): void {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.classList.remove("open-popup");
    }
  }

  displaySelection() {

  }
}

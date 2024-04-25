import {  Component, OnDestroy, OnInit} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainpageComponent } from '../components/mainpage/mainpage.component';
import { ServiceService } from '../services/service.service';
import { Subscription } from 'rxjs';
import { ResultsComponent } from "../results/results.component";
import { CommonModule } from '@angular/common';



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterOutlet, RouterModule, MainpageComponent, ResultsComponent,CommonModule]
})
export class HomeComponent implements OnInit, OnDestroy {

  router: any;
  userScore: any;
  compScore: any;
  private userScoreSubscription: Subscription | undefined;
  private compScoreSubscription: Subscription | undefined;
  userSelectedOption: string | null = null;
  userHasSelected: boolean = false;


  constructor(private service: ServiceService) {
    console.log(' i am yawning')
  }

  ngOnInit(): void {
    this.userScoreSubscription = this.service.userScoreObservable$.subscribe(data => {
      this.userScore = data
    })
  


  {
    this.compScoreSubscription = this.service.compScoreObservable$.subscribe(data=>{
      this.compScore = data
    })
  }
}

  ngOnDestroy(): void {
    this.userScoreSubscription?.unsubscribe();
    this.compScoreSubscription?.unsubscribe();
  }
  userPick(option: string) {
    this.userSelectedOption = option;
    
  }
  resetGame() {
    this.userSelectedOption = null;
    this.userScore = 0;
    this.compScore = 0;
  }

  // goToRulesPage(): void {
  //   this.router.navigate(['/rules']);
  // }



}

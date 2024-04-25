import {  Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService  {
  private userScore =new BehaviorSubject<any>(0)
  private compScore =new BehaviorSubject<any>(0)
  userScoreObservable$ =this.userScore.asObservable()
compScoreObservable$ =this.compScore.asObservable()

  constructor() { }


  public getUserScore(): number {
    return this.userScore.value;
  }

  public updateUserScore(score: number): void {
    
    this.userScore.next(score);
  }

  public getCompScore(): number {
    return this.compScore.value;
  }

  updateCompScore(score: number): void {
    
    this.compScore.next(score);
  }
}

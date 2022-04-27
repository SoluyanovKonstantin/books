import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private isDisplayNewBookPopUp = new BehaviorSubject(false);
  public isDisplayNewBookPopUp$ = this.isDisplayNewBookPopUp.asObservable();

  constructor() { }

  showNewBookPopup() {
    this.isDisplayNewBookPopUp.next(true);
  }

  hideNewBookPopup() {
    this.isDisplayNewBookPopUp.next(false);
  }
}

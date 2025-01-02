import { Injectable, ChangeDetectorRef } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  constructor() {}
  
  show(){
    this.loaderSubject.next({show: true} as LoaderState);
    // this.cdr.detectChanges();
  }

  hide(){
    this.loaderSubject.next({show: false} as LoaderState);
    // this.cdr.detectChanges();
  }
}

export interface LoaderState {
  show: boolean;
}

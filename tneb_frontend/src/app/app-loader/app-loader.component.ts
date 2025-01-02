import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs";
import { LoaderService } from "./loader.service";
import { ConfigService } from "src/services/config.service";
@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {

  show = false;
  private subscription: Subscription;

  constructor(private _loaderService:LoaderService ,private ref: ChangeDetectorRef ) {
   
  }

  ngOnInit() {    
    this.subscription = this._loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
        this.ref.detectChanges();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
export interface LoaderState {
  show: boolean;
}
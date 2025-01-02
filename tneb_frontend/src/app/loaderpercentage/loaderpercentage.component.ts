import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../app-loader/loader.service';
@Component({
  selector: 'app-loaderpercentage',
  templateUrl: './loaderpercentage.component.html',
  styleUrls: ['./loaderpercentage.component.scss']
})
export class LoaderpercentageComponent implements OnInit {
  show = false;
  private subscription: Subscription;

  constructor(private _loaderService:LoaderService ,private ref: ChangeDetectorRef) { }
  // _success:any;
  ngOnInit(): void {
    this.subscription = this._loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.show = state.show;
      this.loader('');
      this.ref.detectChanges();
    });
   
  }
    loader(_success){
          var obj = document.querySelector('.preloader'),
          inner = document.querySelector('.preloader_inner'),
          page = document.querySelector('.page');
          obj.classList.add('show');
          page.classList.remove('show');
          var w = 0,
              t = setInterval(function() {
                  w = w + 1;
                  inner.textContent = w+'%';
                  if (w === 100){
                      obj.classList.remove('show');
                      page.classList.add('show');
                      clearInterval(t);
                      w = 0;
                      if (_success){
                          return _success();
                      }
                  }
              }, 20);
      // }
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
export interface LoaderState {
  show: boolean;
}


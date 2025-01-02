import { HttpClient } from '@angular/common/http';
import { Injectable, APP_INITIALIZER } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _config: any
    
  constructor(private _http: HttpClient) { }
  load() {
      return new Promise((resolve, reject) => {

          this._http.get('./assets/config/app.settings.json')
              .subscribe((data) => {

                  this._config = data;
                  resolve(true);
              },
                  (error: any) => {
                      console.error(error);
                      return throwError(error.json().error || 'Server error');
                  });
      });
    }
      getApi(key: string): string {
        return this._config["ApplicationSettings"][key];
    }
    // Gets a value of specified property in the configuration file
    get(key: any) {
        return this._config[key];
    }
}
export function ConfigFactory(config: ConfigService) {
  return () => config.load();
}

export function init() {
  return {
      provide: APP_INITIALIZER,
      useFactory: ConfigFactory,
      deps: [ConfigService],
      multi: true
  }
}

const ConfigModule = {
  init: init
}

export { ConfigModule };

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  userDetail: any = [{ username: 'sarath', status: '0', password: '12345' },
  { username: 'sarathk', status: '1', password: '12345' }
  ];
  constructor() { }

}

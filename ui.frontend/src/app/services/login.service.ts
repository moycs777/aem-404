import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = '/content/angularapp/us/en/login.html';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    return this.http.get('./assets/mocks/people.json');
  }

  setCurrentUser(user: any) {
    localStorage.setItem('compasso.currentUser', JSON.stringify(user));
  }

  logOut() {
    localStorage.removeItem('compasso.currentUser');
    this.router.navigate([this.loginUrl]);
  }
}

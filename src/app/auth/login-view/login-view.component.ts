import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  email: string;
  name: string;
  password: string;
  

  $userDoc: AngularFirestoreDocument<User>;
  $user: Observable<User>;

  constructor(public authService: AuthService,
              public firebaseAuth: AngularFireAuth) { }


              public userInfo: {} = this.firebaseAuth.authState.subscribe(uid => {
                this.userInfo = uid.uid;
              });

  signUp() {
    this.authService.singUp(this.email, this.password, this.userInfo);
    this.email = this.password = '';
  }

  logIn() {
    this.authService.logIn(this.email, this.password, this.userInfo);
    this.email = this.password = '';
  }

  logOut() {
    this.authService.logOut();
  }

  ngOnInit(): void {
  }

}

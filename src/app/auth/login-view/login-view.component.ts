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
  

  constructor(public authService: AuthService,
              public firebaseAuth: AngularFireAuth) { }
  

  ngOnInit(): void {
  }

}

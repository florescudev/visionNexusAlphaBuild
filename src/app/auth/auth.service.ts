import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // Declare the user variable as observable obj
  user: Observable<firebase.User>;

  private $userCollection: AngularFirestoreCollection<User>; // Init FS collection
  private $user: AngularFirestoreDocument<User>;

  constructor(private firebaseAuth: AngularFireAuth, 
              private afs: AngularFirestore,
              private router: Router) {
                
            this.$userCollection = this.afs.collection<User>('users');
            this.user = this.firebaseAuth.authState;
  
   }

   singUp(email: string, password: string, uid) {
      this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.saveUserOnFirestore(email, uid);
        console.log('User stored in firestore:  ' + uid);
      })
      .catch(err => {
        console.error('Something went wrong:', err.message);
      })
   }

   private saveUserOnFirestore(email: string, uid: string) { 
     let userInfo: User = { 
       uid,
       email
     }
     console.log(userInfo);
     this.firebaseAuth.authState.subscribe(
      user => {
        userInfo.uid = user.uid;
        userInfo.email = user.email;
      }
    )
     this.$userCollection.add(userInfo);
     console.log('User succesfully stored!');
   }

   logIn(email: string, password: string, uid) {
     this.firebaseAuth.signInWithEmailAndPassword(email, password)
     .then(value => {
       console.log('Nice to see you in!');
     })
     .catch(err => {
       console.log('Something went wrong:', err.message)
     })
   }

   logOut() {
     this.firebaseAuth.signOut();
     this.router.navigate(['/']);
   }

}

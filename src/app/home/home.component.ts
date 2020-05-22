import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Technology {
  title: string;
  image?: any;
}

export interface Item {
  title: string;
}

let techTitle: string;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private techCollection: AngularFirestoreCollection<Technology>;
  techs: Observable<Technology[]>;


  constructor(private afs: AngularFirestore) {  
    this.techCollection = afs.collection<Item>('items');
    this.techs = this.techCollection.valueChanges();  
   }

   addItem(techTitle: string) {
     let toAdd: Technology = {
        title: techTitle
     };

    this.techCollection.add(toAdd);
  }
  

  ngOnInit(): void {
  }

}

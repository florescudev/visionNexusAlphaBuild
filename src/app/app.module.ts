import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './blog/articles/articles.component';
import { AddArticleComponent } from './blog/add-article/add-article.component';
import { MyArticlesComponent } from './blog/my-articles/my-articles.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    AddArticleComponent,
    MyArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Vision-Nexus-Alpha-V0.1')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

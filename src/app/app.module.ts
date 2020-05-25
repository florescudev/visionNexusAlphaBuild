import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

/* Services of the APP */
import { AuthService } from './auth/auth.service';
/* // Services of the APP //  */

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './blog/articles/articles.component';
import { AddArticleComponent } from './blog/add-article/add-article.component';
import { MyArticlesComponent } from './blog/my-articles/my-articles.component';
import { environment } from '../environments/environment';
import { LoginViewComponent } from './auth/login-view/login-view.component';
import { DashboardViewComponent } from './auth/dashboard-view/dashboard-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    AddArticleComponent,
    MyArticlesComponent,
    LoginViewComponent,
    DashboardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Vision-Nexus-Alpha-V0.1')
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

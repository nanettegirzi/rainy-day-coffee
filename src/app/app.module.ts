import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { ContactComponent } from './contact/contact.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import { EditCoffeeComponent } from './edit-coffee/edit-coffee.component';
import { FormsModule } from '@angular/forms';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    CoffeeComponent,
    ContactComponent,
    CoffeeDetailComponent,
    AdminComponent,
    EditCoffeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

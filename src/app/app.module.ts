import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import {TermsComponent} from './terms/terms.component';
import {RegistrationComponent} from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LoginComponent,
    NavigationComponent,
    FooterComponent,
    TermsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule, routingComponents} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavigationComponent,
    FooterComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }

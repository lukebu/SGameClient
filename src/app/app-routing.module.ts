import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NewsComponent} from './news/news.component';
import {ContactComponent} from './contact/contact.component';
import {ForumComponent} from './forum/forum.component';
import {WikiComponent} from './wiki/wiki.component';
import {DiscordComponent} from './discord/discord.component';
import {TermsComponent} from './terms/terms.component';
import {ShopComponent} from './shop/shop.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent  },
  {path: 'news', component: NewsComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'wiki', component: WikiComponent},
  {path: 'discord', component: DiscordComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents =  [
  LoginComponent,
  RegistrationComponent,
  PageNotFoundComponent,
  NewsComponent,
  ContactComponent,
  ForumComponent,
  WikiComponent,
  WikiComponent,
  TermsComponent,
  ShopComponent,
  AboutComponent
];

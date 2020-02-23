import { Component } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  applicationName = environment.applicationName;

  /*Main nav */
  community = environment.community;
  createAccount = environment.createAccount;
  news = environment.news;
  login = environment.login;
  contact = environment.contact;
  shop = environment.shop;

  /*Community sub-nav */
  wiki = environment.wiki;
  discord = environment.discord;
  forum = environment.forum;

}

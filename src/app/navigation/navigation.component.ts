import { Component } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  applicationName = environment.applicationName;
}

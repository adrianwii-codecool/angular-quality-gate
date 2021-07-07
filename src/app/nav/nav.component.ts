import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  links = [
    {
      title: 'LIST',
      path: 'sights-list'
    },
    {
      title: 'MAP',
      path: 'sights'
    }
  ];
}

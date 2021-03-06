import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/services/auth.service';
import {MainRouteButtons} from '../../main-const';
import {NavigateButtonData} from '../../../shared/interfaces';


@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})

export class NavigateComponent implements OnInit {

  linkArr: NavigateButtonData[] = MainRouteButtons;

  activeLink = this.router.url;

  constructor(
    private router: Router,
    public auth: AuthService
  ) {
  }

  ngOnInit(): void {
  }

}

// ['/main', 'calendar']
//   ['/main', 'week']
//   ['/main', 'day'];

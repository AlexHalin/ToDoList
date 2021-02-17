import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/auth']);
  }
}

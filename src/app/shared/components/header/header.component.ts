import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from './../../../services/auth/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthorizationService]
})
export class HeaderComponent implements OnInit {
  public isLogged = false;
  public user: any;

  constructor(private auth: AuthorizationService,
    private router: Router) { }

  async ngOnInit() {
    console.log('nav ');
    this.user = await this.auth.hasUser();
    if (this.user) {
      this.isLogged = true;


    }
  }


  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(['/login']);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { I18nService } from '../../i18n.service';

const NAVIGATION_LINKS = [
  {
    text: 'Personal',
    route: '/home'
  },
  {
    text: 'Experience',
    route: '/experience'
  },
  {
    text: 'Technology',
    route: '/technology'
  },
  {
    text: 'Articles',
    route: '/articles'
  }
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationLinks = {};
  menuHidden = true;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private i18nService: I18nService) { }

  ngOnInit() {
    this.navigationLinks = NAVIGATION_LINKS;
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }


  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }

}

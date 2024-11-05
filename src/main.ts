/// <reference types="@angular/localize" />

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ConnexionComponent } from './app/connexion/connexion.component';

/*@Component({
  standalone: true,
  selector: 'app-component',
})
export class ConnexionComponent { }*/

// @Component({
//   standalone: true,
//   imports: [ConnexionComponent],
//   template: `<profile-photo />`
// })
// export class UserProfile { }



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  
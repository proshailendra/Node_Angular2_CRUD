import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { User } from './user'
import { UserService } from './user.service'

@Component({
  selector: 'my-app',
  template: `
  <div class="navbar navbar-default">
        <a class="navbar-brand" href="#">Angular2 App</a>
        <ul class="nav navbar-nav">
            <li>
               <a routerLink="/">Home</a>
            </li>
            <li>
                <a [routerLink]="['create']">Create</a>
            </li>
        </ul>
    </div>
    <div class="container">
      <router-outlet></router-outlet>
    </div>    
  `
})
export class AppComponent {   

}
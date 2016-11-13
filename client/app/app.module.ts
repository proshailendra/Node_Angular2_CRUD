import { NgModule } from '@angular/core';
import { BrowserModule, Title  } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { UserComponent }  from './user.component';
import { CreateComponent }  from './create.component';
import { PageNotFoundComponent }  from './pagenotfound.component';
import { UserService }  from './user.service';

@NgModule({
  imports:  [ BrowserModule,
              FormsModule, //for using two way data binding on textbox
              ReactiveFormsModule,
              HttpModule,
              RouterModule.forRoot([      
                                    { path: 'create', component: CreateComponent }, 
                                    { path: 'edit/:id', component: CreateComponent },     
                                    { path: '', component: UserComponent },
                                    { path: '**', component: PageNotFoundComponent }
                                  ])
            ],
  declarations: [ AppComponent,UserComponent, CreateComponent, PageNotFoundComponent ],
  providers: [ Title, UserService ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }
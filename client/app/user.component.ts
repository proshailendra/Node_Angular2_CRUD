import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from './user'
import { UserService } from './user.service'

@Component({
  template: `
  <h1>{{pageTitle}}</h1>
  <table class="table">
    <tr>
      <th>User Id</th>
      <th>Name</th>
      <th>Address</th>
      <th>Contact No.</th>
      <th>Actions</th>
    </tr>
    <tr *ngFor="let user of users">
      <td>{{user.UserId}}</td>
      <td>{{user.Name}}</td>
      <td>{{user.Address}}</td>
      <td>{{user.ContactNo}}</td>
      <td>
        <a [routerLink]="['/edit', user.UserId]" class="btn btn-success">Edit</a>
        <a href="javascript:void(0)" (click)="deleteUser(user.UserId)" class="btn btn-warning">Delete</a>
      </td>
    </tr>
   </table>
  `
})
export class UserComponent {
  pageTitle: string = "User List";
  users: User[] = [];

  constructor(titleService: Title, private userService: UserService, private router: Router) {
    titleService.setTitle("User List");
  }
  ngOnInit() {
    // Load users
    this.loadUsers()
  }
  loadUsers() {
    // Get all users
    this.userService.getUsers().subscribe(p => this.users = p);
  }
  deleteUser(id: number) {
    // delete user based on id
    if (confirm('Are you sure to delete?')) {
      this.userService.deleteUser(id).subscribe(p => {
        for (let i = 0; i < this.users.length; i++) {
          if (id == this.users[i].UserId) {
            this.users.splice(i, 1);
          }
        }
      });
    }
  }
}
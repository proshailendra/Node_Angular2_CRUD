import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './user'
import { UserService } from './user.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template: `
  <style>
   .ng-valid:not(form)  {
        border-left: 4px solid #42A948; /* green */
    }  
  .ng-invalid:not(form)  {
        border-left: 4px solid #FD4545; /* red */
    }
  </style>
  <h1>{{pageTitle}}</h1>
  <hr/>
  <form class="form-horizontal" [formGroup]="userForm" (ngSubmit)="submitForm(userForm.value)">
  <div class="form-group">
    <label class="control-label col-sm-2" for="Name">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [formControl]="userForm.controls['Name']">
       <div *ngIf="userForm.controls['Name'].hasError() && userForm.controls['Name'].touched" class="text-danger">Please Enter Name</div>
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="Address">Address</label>
    <div class="col-sm-10"> 
      <textarea class="form-control" [formControl]="userForm.controls['Address']"></textarea> 
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="ContactNo">Contact No.</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [formControl]="userForm.controls['ContactNo']">
    </div>
  </div>
  <div class="form-group"> 
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">Save</button>
      <a routerLink="/" class="btn btn-warning">Cancel</a>
    </div>
  </div>
</form>
  `
})
export class CreateComponent {
  pageTitle: string = "Create User";
  userForm: FormGroup;

  constructor(private titleService: Title, private userService: UserService, private router: Router, private route: ActivatedRoute, fb: FormBuilder) {
    titleService.setTitle("Create User");

    // Here we are using the FormBuilder to build out our form.
    this.userForm = fb.group({
      'UserId': 0,
      'Name': [null, Validators.required],
      'Address': [null, Validators.required],
      'ContactNo': '',
    })
  }
  ngOnInit() {
    // Load users    
    let id = this.route.snapshot.params['id'];
    if (id != undefined) {
      this.pageTitle = "Update User";
      this.titleService.setTitle("Update User");
      this.loadUser(id);
    }
  }
  loadUser(id) {
    // Get use based on id    
    this.userService.getUser(id).subscribe(p => {
      this.userForm.controls['UserId'].setValue(p.UserId);
      this.userForm.controls['Name'].setValue(p.Name);
      this.userForm.controls['Address'].setValue(p.Address);
      this.userForm.controls['ContactNo'].setValue(p.ContactNo);
    });
  }
  submitForm(user: User): void {  
    if (user.UserId > 0) {
      this.userService.updateUser(user).subscribe(p => this.router.navigate(['/']));
    }
    else{
      this.userService.createUser(user).subscribe(p => this.router.navigate(['/']));
    }
  }
}

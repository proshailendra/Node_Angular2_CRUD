"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var user_service_1 = require('./user.service');
var router_1 = require('@angular/router');
var CreateComponent = (function () {
    function CreateComponent(titleService, userService, router, route, fb) {
        this.titleService = titleService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.pageTitle = "Create User";
        titleService.setTitle("Create User");
        // Here we are using the FormBuilder to build out our form.
        this.userForm = fb.group({
            'UserId': 0,
            'Name': [null, forms_1.Validators.required],
            'Address': [null, forms_1.Validators.required],
            'ContactNo': '',
        });
    }
    CreateComponent.prototype.ngOnInit = function () {
        // Load users    
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.pageTitle = "Update User";
            this.titleService.setTitle("Update User");
            this.loadUser(id);
        }
    };
    CreateComponent.prototype.loadUser = function (id) {
        var _this = this;
        // Get use based on id    
        this.userService.getUser(id).subscribe(function (p) {
            _this.userForm.controls['UserId'].setValue(p.UserId);
            _this.userForm.controls['Name'].setValue(p.Name);
            _this.userForm.controls['Address'].setValue(p.Address);
            _this.userForm.controls['ContactNo'].setValue(p.ContactNo);
        });
    };
    CreateComponent.prototype.submitForm = function (user) {
        var _this = this;
        if (user.UserId > 0) {
            this.userService.updateUser(user).subscribe(function (p) { return _this.router.navigate(['/']); });
        }
        else {
            this.userService.createUser(user).subscribe(function (p) { return _this.router.navigate(['/']); });
        }
    };
    CreateComponent = __decorate([
        core_1.Component({
            template: "\n  <style>\n   .ng-valid:not(form)  {\n        border-left: 4px solid #42A948; /* green */\n    }  \n  .ng-invalid:not(form)  {\n        border-left: 4px solid #FD4545; /* red */\n    }\n  </style>\n  <h1>{{pageTitle}}</h1>\n  <hr/>\n  <form class=\"form-horizontal\" [formGroup]=\"userForm\" (ngSubmit)=\"submitForm(userForm.value)\">\n  <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"Name\">Name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" [formControl]=\"userForm.controls['Name']\">\n       <div *ngIf=\"userForm.controls['Name'].hasError() && userForm.controls['Name'].touched\" class=\"text-danger\">Please Enter Name</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"Address\">Address</label>\n    <div class=\"col-sm-10\"> \n      <textarea class=\"form-control\" [formControl]=\"userForm.controls['Address']\"></textarea> \n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"ContactNo\">Contact No.</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" [formControl]=\"userForm.controls['ContactNo']\">\n    </div>\n  </div>\n  <div class=\"form-group\"> \n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n      <a routerLink=\"/\" class=\"btn btn-warning\">Cancel</a>\n    </div>\n  </div>\n</form>\n  "
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, user_service_1.UserService, router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map
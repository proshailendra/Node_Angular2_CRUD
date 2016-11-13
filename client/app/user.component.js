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
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var UserComponent = (function () {
    function UserComponent(titleService, userService, router) {
        this.userService = userService;
        this.router = router;
        this.pageTitle = "User List";
        this.users = [];
        titleService.setTitle("User List");
    }
    UserComponent.prototype.ngOnInit = function () {
        // Load users
        this.loadUsers();
    };
    UserComponent.prototype.loadUsers = function () {
        var _this = this;
        // Get all users
        this.userService.getUsers().subscribe(function (p) { return _this.users = p; });
    };
    UserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        // delete user based on id
        if (confirm('Are you sure to delete?')) {
            this.userService.deleteUser(id).subscribe(function (p) {
                for (var i = 0; i < _this.users.length; i++) {
                    if (id == _this.users[i].UserId) {
                        _this.users.splice(i, 1);
                    }
                }
            });
        }
    };
    UserComponent = __decorate([
        core_1.Component({
            template: "\n  <h1>{{pageTitle}}</h1>\n  <table class=\"table\">\n    <tr>\n      <th>User Id</th>\n      <th>Name</th>\n      <th>Address</th>\n      <th>Contact No.</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let user of users\">\n      <td>{{user.UserId}}</td>\n      <td>{{user.Name}}</td>\n      <td>{{user.Address}}</td>\n      <td>{{user.ContactNo}}</td>\n      <td>\n        <a [routerLink]=\"['/edit', user.UserId]\" class=\"btn btn-success\">Edit</a>\n        <a href=\"javascript:void(0)\" (click)=\"deleteUser(user.UserId)\" class=\"btn btn-warning\">Delete</a>\n      </td>\n    </tr>\n   </table>\n  "
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, user_service_1.UserService, router_1.Router])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map
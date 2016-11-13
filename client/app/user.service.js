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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:1320/api';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.baseUrl + "/user")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.getUser = function (id) {
        return this.http
            .get(this.baseUrl + "/user/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw('Server error'); });
    };
    UserService.prototype.createUser = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http
            .post(this.baseUrl + "/user", JSON.stringify(user), { headers: headers })
            .catch(function (error) { return Rx_1.Observable.throw('Server error'); });
    };
    UserService.prototype.updateUser = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http
            .put(this.baseUrl + "/user/" + user.UserId, JSON.stringify(user), { headers: headers })
            .catch(function (error) { return Rx_1.Observable.throw('Server error'); });
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http
            .delete(this.baseUrl + "/user/" + id)
            .catch(function (error) { return Rx_1.Observable.throw('Server error'); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
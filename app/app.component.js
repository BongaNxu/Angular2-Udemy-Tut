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
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.desc = "Real Application";
        this.title = "Angular App (NG-Stings)";
    }
    AppComponent.prototype.onDivClick = function () {
        console.log("Handled by Div");
    };
    AppComponent.prototype.onClick = function ($event) {
        console.log("Clicked", $event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>My First {{ desc }}</h1>\n              <div (click)=\"onDivClick\">\n                <button (click)=\"onClick($event)\">Submit</button>\n              </div>\n              <input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\" /> \n              <input type=\"button\" (click)=\"title = ''\" value=\"Clear\" />\n              preview: {{ title }} \n             "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
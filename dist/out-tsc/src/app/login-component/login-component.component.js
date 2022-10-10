import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LoginComponentComponent = class LoginComponentComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.heading = "Login to Shopping App";
        this.userId = "";
        this.password = "";
    }
    ngOnInit() {
    }
    submitUser() {
        if (this.userId === "" || this.password === "") {
            alert("UserName and password cannot be empty");
        }
        else {
            this.apiService.getRequest("//localhost:3000/api/UserLogin", { password: this.password, userid: this.userId }).subscribe((response) => {
                // console.log(response.recordset);
                if (response.recordset.length > 0) {
                    alert("logged in successfully");
                }
                else {
                    alert("Userid or password is wrong");
                }
            }, (error) => {
                alert(error);
            });
        }
    }
};
__decorate([
    Input()
], LoginComponentComponent.prototype, "userId", void 0);
__decorate([
    Input()
], LoginComponentComponent.prototype, "password", void 0);
LoginComponentComponent = __decorate([
    Component({
        selector: 'app-login-component',
        templateUrl: './login-component.component.html',
        styleUrls: ['./login-component.component.css']
    })
], LoginComponentComponent);
export { LoginComponentComponent };
//# sourceMappingURL=login-component.component.js.map
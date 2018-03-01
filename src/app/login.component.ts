import { Component } from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { PasswordValidator } from "./passwordValidator";

@Component({
selector:'login',
templateUrl:"login.component.html"

})
export class LoginComponent{

    form = new FormGroup({
        username:new FormControl('',  Validators.required),
        password: new FormControl('', Validators.compose([Validators.required,
            PasswordValidator.cannotContainSpace]))
    });
    login(){
        console.log(this.form.value);
    }

}
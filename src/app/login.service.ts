import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    login(username,password){
        if(username=="patri" && password=="simone") return true;
        else return false;
    }
}
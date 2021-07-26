import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser:User;

  private users:User[];

  constructor() {
    this.currentUser={
      username:"",
      password:"",
      role:"unauthorized"
    };
    this.users = [
      {
        username:"user",
        password:"user",
        role:"user"
      },
      {
        username:"admin",
        password:"admin",
        role:"admin"
      }
    ]
  }

  authenticate(username:string,password:string){
    if(username==="user" && password==="user"){
      this.currentUser = this.users[0];
    }
    else if(username==="admin" && password==="admin"){
      this.currentUser = this.users[1];
    }
    else{
      this.currentUser = {
        username:"",
        password:"",
        role:"unauthorized"
      }
    }
  }

  getCurrentUserRole():string{
    return this.currentUser.role;
  }

}

interface User{
  username:string,
  password:string,
  role:string
}

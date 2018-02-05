///<reference path="../../../../node_modules/@types/jasmine/index.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {AfpService} from "../afp.service";
import {User} from "../User";
import {Router} from "@angular/router";


@Component({
  selector: 'app-afp-list',
  templateUrl: './afp-list.component.html',
  styleUrls: ['./afp-list.component.css'],
  providers: [AfpService]
})
export class AfpListComponent implements OnInit {
  private users:User[];
  constructor(private afpService : AfpService, private  router:Router) { }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser(){
    this.afpService.findAll().subscribe(
      users =>
      {
        this.users = users;
      },
      err =>{
        console.log(err);
      }
    )
  }
  NewUserPage(){
    this.router.navigate(['user/create']);
  }
  updateUserPage(user : User){
    if(user) {
      this.router.navigate(['user/edit', user.id]);
    }
  }

  deleteUser(user: User) {
    if (user){
      let promise = new Promise(resolve => resolve(this.afpService.deleteUserById(user.id).subscribe()));
      promise.then( resposne =>
        {return setTimeout(() => this.getAllUser(),50)}
        );
    }
  }

}

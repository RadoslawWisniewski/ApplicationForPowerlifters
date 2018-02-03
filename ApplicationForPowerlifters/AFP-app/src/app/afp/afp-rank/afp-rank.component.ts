import { Component, OnInit } from '@angular/core';
import {AfpService} from "../afp.service";
import {User} from "../User";
import {Router} from "@angular/router";
@Component({
  selector: 'app-afp-rank',
  templateUrl: './afp-rank.component.html',
  styleUrls: ['./afp-rank.component.css'],
  providers: [AfpService]
})
export class AfpRankComponent implements OnInit {
  private users : User[];
  constructor(private afpService : AfpService,private router : Router) { }

  ngOnInit() {
    this.getAllUserSort()
  }
  NewUserPage(){
    this.router.navigate(['user/create']);
  }
  getAllUserSort(){
    this.afpService.findAllSort().subscribe(
      users => this.users = users,
      error2 => console.log(error2)
    )
  }
}

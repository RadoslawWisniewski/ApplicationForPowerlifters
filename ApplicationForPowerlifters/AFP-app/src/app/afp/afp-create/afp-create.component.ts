import {Component, OnDestroy, OnInit} from '@angular/core';
import {AfpService} from "../afp.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../User";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {timeout} from "rxjs/operator/timeout";
import {delay} from "rxjs/operator/delay";

@Component({
  selector: 'app-afp-create',
  templateUrl: './afp-create.component.html',
  styleUrls: ['./afp-create.component.css'],
  providers: [AfpService]
})
export class AfpCreateComponent implements OnInit, OnDestroy{
  id : number;
  user : User;
  userForm : FormGroup;
  ngOnDestroy(): void {
  }

  constructor(private route : ActivatedRoute, private router : Router, private afpService : AfpService ) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('Imie nie moze zawierać cyfr ani znaków specjalnych'),
      lastName: new FormControl('Nazwisko nie moze zawierac cyfr ani znaków specjalnych'),
      height : new FormControl(''),
      weight : new FormControl(''),
      benchpress : new FormControl(''),
      deadlift : new FormControl(''),
      squat : new FormControl('')
  })}
    onSubmit(){
      let user : User =  new User(null,
        this.userForm.controls['firstName'].value,
        this.userForm.controls['lastName'].value,
        this.userForm.controls['height'].value,
        this.userForm.controls['weight'].value,
        this.userForm.controls['benchpress'].value,
        this.userForm.controls['deadlift'].value,
        this.userForm.controls['squat'].value,
        null,
        null);
      this.afpService.saveUser(user).subscribe();
      this.userForm.reset();
      setTimeout(() => this.router.navigate(['/user']),500);
  }

  redirectUserPage() {
    this.router.navigate(['/user']);
  }

}

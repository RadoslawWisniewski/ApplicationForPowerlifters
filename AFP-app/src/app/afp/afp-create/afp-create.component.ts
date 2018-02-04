import {Component, OnDestroy, OnInit} from '@angular/core';
import {AfpService} from "../afp.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../User";
import {FormControl, FormGroup} from "@angular/forms";


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
  update:any;
  ngOnDestroy(): void {
    this.update.unsubscribe();
  }

  constructor(private route : ActivatedRoute, private router : Router, private afpService : AfpService ) { }

  ngOnInit() {
    this.update = this.route.params.subscribe(params => this.id = params['id']);
    this.userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      height : new FormControl(''),
      weight : new FormControl(''),
      benchpress : new FormControl(''),
      deadlift : new FormControl(''),
      squat : new FormControl('')
  });

    if(this.id){
      this.afpService.findById(this.id).subscribe(
        user => {
          this.id = user.id;
          this.userForm.patchValue(
            {
              firstName : user.firstName,
              lastName : user.lastName,
              height : user.height,
              weight : user.weight,
              benchpress : user.benchpress,
              deadlift : user.deadlift,
              squat : user.squat
            }
          );
        },error2 => {
          console.log(error2);
        }
      );
    }
  }
    onSubmit(){
    if(this.id) {
      let user: User = new User(this.id,
        this.userForm.controls['firstName'].value,
        this.userForm.controls['lastName'].value,
        this.userForm.controls['height'].value,
        this.userForm.controls['weight'].value,
        this.userForm.controls['benchpress'].value,
        this.userForm.controls['deadlift'].value,
        this.userForm.controls['squat'].value,
        null,
        null);
      this.afpService.updateUser(user).subscribe();
    }else {
      let user: User = new User(null,
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
    }
      this.userForm.reset();
      setTimeout(() => this.router.navigate(['/user']),500);
  }

  redirectUserPage() {
    this.router.navigate(['/user']);
  }

}

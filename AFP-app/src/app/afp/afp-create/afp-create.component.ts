import {Component, OnDestroy, OnInit} from '@angular/core';
import {AfpService} from "../afp.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../User";
import {FormControl, FormGroup, Validators} from "@angular/forms";



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
      firstName: new FormControl('Imię może zawierać tylko litery(bez polskich znaków)', [
        Validators.required,
        Validators.pattern("[a-zA-z]+")
        ]
      ),
      lastName: new FormControl('Nazwisko może zawierać tylko litery(bez polskich znaków)',[
        Validators.required,
        Validators.pattern("[a-zA-z]+")
      ]),
      height : new FormControl('Wysokość podawana w [cm]. Zakres od 0-250',[
        Validators.required,
        Validators.min(0),
        Validators.max(250)
      ]),
      weight : new FormControl('Waga podawana w [kg]. Zakres od 50-120',[
        Validators.required,
        Validators.min(50),
        Validators.max(120)
      ]),
      benchpress : new FormControl('Wynik podawany w [kg]. Zakres do 0-400',[
        Validators.required,
        Validators.min(0),
        Validators.max(400)
      ]),
      deadlift : new FormControl('Wynik podawany w [kg]. Zakres od 0-500',[
        Validators.required,
        Validators.min(0),
        Validators.max(500)
      ]),
      squat : new FormControl('Wynik podawany w [kg]. Zakres od 0-600',[
        Validators.required,
        Validators.min(0),
        Validators.max(600)
      ])
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
      let promise = new Promise(resolve => resolve(this.afpService.updateUser(user).subscribe()));
      promise.then(response =>
      { return setTimeout(this.router.navigate(['/user']),100)})
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
      let promise = new Promise(resolve => resolve(this.afpService.saveUser(user).subscribe()));
      promise.then(resposne =>
        {return setTimeout(this.router.navigate(['/user']),100)}
      );
    }
      this.userForm.reset();
  }

  redirectUserPage() {
    this.router.navigate(['/user']);
  }

}

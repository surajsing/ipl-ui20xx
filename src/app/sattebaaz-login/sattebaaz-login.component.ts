import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sattebaaz-login',
  templateUrl: './sattebaaz-login.component.html',
  styleUrls: ['./sattebaaz-login.component.scss']
})
export class SattebaazLoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  invalidLogin = false;

  constructor(private router: Router) { }

  get fields() {
    return this.form.controls;
  }

  onSubmit() {
    if (!this.fields.username.errors && this.fields.username.value === 'suraj' && this.fields.password.value === 'singh') {
      localStorage.setItem('username',this.fields.username.value);
      this.router.navigate(['/sattebaaz-home']);
    } else {
      this.form.reset();
      this.invalidLogin = true;
      setTimeout(() => {
        if(this.invalidLogin){
          this.invalidLogin = false;
        }
      }, 2000);
    }
  }

  isUserAlreadyLoggedIn(){
    if(localStorage.getItem('username') && (localStorage.getItem('username')==='suraj')){
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

}

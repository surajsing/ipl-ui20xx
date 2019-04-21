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

  setUsername(loginUser : string) {
    localStorage.setItem('username', loginUser);
    this.router.navigate(['/sattebaaz-home']);
  }

  resetForm() {
    this.form.reset();
    this.invalidLogin = true;
    setTimeout(() => {
      if (this.invalidLogin) {
        this.invalidLogin = false;
      }
    }, 2000);
  }

  onSubmit() {
    if (!this.fields.username.errors && this.fields.username.value) {
      localStorage.removeItem('username');
      let userName : string = this.fields.username.value;
      let setName = userName.toLowerCase();
      let password : string = this.fields.password.value;
      switch (setName) {
        case 'suraj': if ((password.toLowerCase()) === 'singh') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'kalpesh': if ((password.toLowerCase()) === 'kalpesh') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'kailash': if ((password.toLowerCase()) === 'kailash') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'neeraj': if ((password.toLowerCase()) === 'neeraj') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'pooja': if ((password.toLowerCase()) === 'pooja') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'snehal': if ((password.toLowerCase()) === 'snehal') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'manasi': if ((password.toLowerCase()) === 'manasi') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'radhika': if ((password.toLowerCase()) === 'radhika') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'shruti': if ((password.toLowerCase()) === 'shruti') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'param': if ((password.toLowerCase()) === 'param') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'pratik': if ((password.toLowerCase()) === 'pratik') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'tushar': if ((password.toLowerCase()) === 'tushar') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'neha': if ((password.toLowerCase()) === 'neha') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'siddhu': if ((password.toLowerCase()) === 'siddhu') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'poonam': if ((password.toLowerCase()) === 'poonam') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        default: this.resetForm();
      }
    } else {
      this.resetForm();
    }
  }

  isUserAlreadyLoggedIn() {
    if (localStorage.getItem('username') && (localStorage.getItem('username') === 'suraj')) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

}

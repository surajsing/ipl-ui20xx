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
      console.log(setName);
      switch (setName) {
        case 'suraj': if (this.fields.password.value === 'singh') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'kalpesh': if (this.fields.password.value === 'kalpesh') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'kailash': if (this.fields.password.value === 'kailash') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'neeraj': if (this.fields.password.value === 'neeraj') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'pooja': if (this.fields.password.value === 'pooja') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'snehal': if (this.fields.password.value === 'snehal') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'manasi': if (this.fields.password.value === 'manasi') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'radhika': if (this.fields.password.value === 'radhika') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'shruti': if (this.fields.password.value === 'shruti') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'param': if (this.fields.password.value === 'param') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'pratik': if (this.fields.password.value === 'pratik') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'tushar': if (this.fields.password.value === 'tushar') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'neha': if (this.fields.password.value === 'neha') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'siddhu': if (this.fields.password.value === 'siddhu') {
          this.setUsername(setName);
        } else this.resetForm();
          break
        case 'poonam': if (this.fields.password.value === 'poonam') {
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  // model form
  LoginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInit(): void {

  }


  login() {
    var acno = this.LoginForm.value.acno
    var pswd = this.LoginForm.value.psw

    if (this.LoginForm.valid) {
      this.ds.login(acno, pswd).subscribe((result: any) => {

        localStorage.setItem("currentUser", JSON.stringify(result.currentUser))
        localStorage.setItem("currentAcno", JSON.stringify(result.currentAcno))
        localStorage.setItem("token", JSON.stringify(result.token))

        alert(result.message)
        this.router.navigateByUrl('dashbord')

      },
        result => {

          alert(result.error.message)

        })


    } else {
      alert('invalid form')
    }

  }

}

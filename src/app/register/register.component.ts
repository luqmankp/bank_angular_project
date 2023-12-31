import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  // create reaction form of regisetr form
  registerForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInit(): void { }

  register() {

    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw

    if (this.registerForm.valid) {

      this.ds.register(uname, acno, psw).subscribe((result: any) => {

        alert(result.message)
        this.router.navigateByUrl("")

      },
        result => {
          alert(result.error.message)
          this.router.navigateByUrl("")
        }
      )
    }

    else {
      alert('Invalid form')
    }

  }
}


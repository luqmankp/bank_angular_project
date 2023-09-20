import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  acno: any
  psw: any

  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {

  }

  //  login(a:any,b:any) {
  // //   // alert('login alert')
  //    var acnum = a.value
  //    var psw = b.value
  //   var userDetails = this.userDetails
  //   if (acnum in userDetails) {
  //     if (psw == userDetails[acnum]["password"]) {
  //       alert('login success')
  //     }

  //     else {
  //       alert("incorrect password")
  //     }
  //   }

  //   else {
  //     alert("please register or incorrect password")
  //   }

  // }

  login() {
    var acnum = this.acno
    var psw = this.psw
    var userDetails = this.ds.userDetails
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]["password"]) {
        alert('login success')
        this.router.navigateByUrl('dashbord')
      }

      else {
        alert("incorrect password")
      }
    }

    else {
      alert("please register or incorrect password")
    }

  }


  // acnoChange(event: any) {
  //   this.acno = event.target.value
  //   // console.log(this.acno);
  // }

  // paswrdChange(event: any) {
  //   this.psw = event.target.value
  //   // console.log(this.psw);

  // }

}

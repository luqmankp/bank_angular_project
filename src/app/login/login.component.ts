import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // acno: any
  // psw: any

  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: "abc123", balance: 0 },
    1001: { acno: 1001, username: "amal", password: "abc123", balance: 0 },
    1003: { acno: 1003, username: "arun", password: "abc123", balance: 0 },
    1004: { acno: 1004, username: "akil", password: "abc123", balance: 0 }
  }

  constructor() { }

  ngOnInit(): void {

  }

   login(a:any,b:any) {
  //   // alert('login alert')
     var acnum = a.value
     var psw = b.value
    var userDetails = this.userDetails
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]["password"]) {
        alert('login success')
      }

      else {
        alert("incorrect password")
      }
    }

    else {
      alert("please register or incorrect password")
    }

  }

  // login() {
    // var acnum = this.acno
    // var psw = this.psw
    // var userDetails = this.userDetails
    // if (acnum in userDetails) {
    //   if (psw == userDetails[acnum]["password"]) {
    //     alert('login success')
    //   }

    //   else {
    //     alert("incorrect password")
    //   }
    // }

    // else {
    //   alert("please register or incorrect password")
    // }

  // }


  // acnoChange(event: any) {
  //   this.acno = event.target.value
  //   // console.log(this.acno);
  // }

  // paswrdChange(event: any) {
  //   this.psw = event.target.value
  //   // console.log(this.psw);

  // }

 }

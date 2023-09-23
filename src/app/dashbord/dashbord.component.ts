import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  user: any

  acno: any
  psw: any
  amnt: any

  acno1: any
  psw1: any
  amnt1: any

  constructor(private ds: DataService) {
    this.user = this.ds.currentuser
  }

  ngOnInit(): void {

  }

  deposit() {

    var acno = this.acno
    var psw = this.psw
    var amnt = this.amnt
    const result = this.ds.deposit(acno, psw, amnt)
    if (result) {
      alert(`your account has been credited amount ${amnt}, balance is ${result}`)
    }
    else {
      alert("incorrect account number or password")
    }

  }

  withdraw() {

    var acno = this.acno1
    var psw = this.psw1
    var amnt = this.amnt1
    const result = this.ds.withdraw(acno, psw, amnt)
    if (result) {
      alert(`your account has been debited with amount ${amnt}, and the current balance is ${result}`)
    }
  }

}

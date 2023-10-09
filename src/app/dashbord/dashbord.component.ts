import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  user: any
  acno: any
  datedetails: any

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {

    if (localStorage.getItem("currentUser")) {
      this.user = JSON.parse(localStorage.getItem("currentUser") || "")
    }

    //access date 
    this.datedetails = new Date()
  }

  depsitFrom = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  ngOnInit(): void {
    if (!localStorage.getItem("token")) {
      alert('please login')
      this.router.navigateByUrl("")
    }

  }

  deposite() {
    var acno = this.depsitFrom.value.acno
    var psw = this.depsitFrom.value.psw
    var amnt = this.depsitFrom.value.amnt

    if (this.depsitFrom.valid) {
      this.ds.deposite(acno, psw, amnt).subscribe((result: any) => {

        alert(result.message)

      },
        result => {
          alert(result.error.message)
        }
      )

    } else {
      alert('invalid form')
    }



  }
  withdraw() {
    var acno = this.withdrawForm.value.acno1
    var psw = this.withdrawForm.value.psw1
    var amnt = this.withdrawForm.value.amnt1

    if (this.withdrawForm.valid) {
      this.ds.withdraw(acno, psw, amnt).subscribe((result: any) => {

        alert(result.message)

      },
        result => {
          alert(result.error.message)
        })

    } else {
      alert('invalid form')
    }


  }

  logout() {

    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }

  deleteParent() {
    this.acno = JSON.parse(localStorage.getItem("currentAcno") || "")

  }
  cancel() {
    this.acno = ''
  }
  Delete(event: any) {
    // alert(event)
    this.ds.deleteAcc(event).subscribe((result: any) => {
      alert(result.message)
      this.logout()
    })
  }
}






// import { Component } from '@angular/core';
// import { DataService } from '../service/data.service';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-dashbord',
//   templateUrl: './dashbord.component.html',
//   styleUrls: ['./dashbord.component.css']
// })
// export class DashbordComponent {

//   user: any
//   acno: any
//   datedetails: any


//   constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {

//     if (localStorage.getItem("currentUser")) {
//       this.user = JSON.parse(localStorage.getItem("currentUser") || "")
//     }

//     // access date
//     this.datedetails = new Date()

//   }

//   depositForm = this.fb.group({

//     acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
//     amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]],
//     psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]

//   })

//   withdrawForm = this.fb.group({

//     acno1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
//     amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
//     psw1: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]

//   })

//   ngOnInit(): void {
//     if (!localStorage.getItem("currentAcno")) {
//       alert('please logi')
//       this.router.navigateByUrl("")
//     }
//   }


//   deposit() {
//     var acno = this.depositForm.value.acno
//     var psw = this.depositForm.value.psw
//     var amnt = this.depositForm.value.amnt

//     if (this.depositForm.valid) {
//       this.ds.deposit(acno, psw, amnt).subscribe((result: any) => {

//         alert(result.message)

//       },
//         result => {
//           alert(result.error.message)
//         })
//     }

//     else {
//       alert('invalid form')
//     }

//   }


//   withdraw() {

//     var acno = this.withdrawForm.value.acno1
//     var psw = this.withdrawForm.value.psw1
//     var amnt = this.withdrawForm.value.amnt1

//     if (this.withdrawForm.valid) {

//       this.ds.withdraw(acno, psw, amnt).subscribe((result: any) => {

//         alert(result.message)
//       },
//         result => {
//           alert(result.error.message)
//         }
//       )
//     }

//     else {
//       alert('Invalid form')
//     }
//   }

//   logout() {
//     localStorage.removeItem("currentUser")
//     localStorage.removeItem("currentAcno")
//     this.router.navigateByUrl("")
//   }

//   deleteParent() {
//     this.acno = JSON.parse(localStorage.getItem("currentAcno") || "")
//   }
//   cancel() {
//     this.acno = ''
//   }
// }


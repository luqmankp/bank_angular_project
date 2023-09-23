import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  uname = ''
  acno = ''
  psw = ''

  constructor(private ds: DataService,private router: Router) { }

  ngOnInit(): void { }

  register() {

    var uname=this.uname
    var acno=this.acno
    var psw=this.psw

    const result=this.ds.register(uname,acno,psw)

    if(result){
      alert('registered')
      this.router.navigateByUrl("")
    }
    else{
      alert('account already registered')

    }


   // console.log(uname,acno,psw);


    

  }

}

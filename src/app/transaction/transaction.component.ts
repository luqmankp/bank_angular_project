import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  transactionData: any

  constructor(private ds: DataService, private router: Router) {

    this.ds.getTransaction(JSON.parse(localStorage.getItem("currentAcno") || ""))
      .subscribe((result: any) => {
        this.transactionData = result.transaction
      })


  }

  ngOnInit(): void {

  }  

}




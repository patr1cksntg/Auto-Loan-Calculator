import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  AL: number;
  vehicleprice: number;
  loanterm: number;
  loanamount: number;
  downpayment: number;
  downpaymentamount: number;
  totalinterest: number;
  monthlyamortization: number; 
  
  constructor(public navCtrl: NavController)  {}

  calculateAL() {
  this.downpaymentamount = this.vehicleprice * this.downpayment/100
  this.downpaymentamount = parseFloat(this.downpaymentamount.toFixed(2));
  this.loanamount = this.vehicleprice - this.downpaymentamount
  this.loanamount = parseFloat(this.loanamount.toFixed(2));
  this.totalinterest = this.loanamount * 0.3026
  this.totalinterest = parseFloat(this.totalinterest.toFixed(2));
  this.monthlyamortization = (this.loanamount + this.totalinterest)/this.loanterm
  this.monthlyamortization = parseFloat(this.monthlyamortization.toFixed(2));

}
}

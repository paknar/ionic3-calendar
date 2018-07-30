import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad KalenderKeretaPage');
  }

  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  monthNames2: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  
  month: any;
  todayMonth: any;
  currentDay: any;
  
  tesDay: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  
  ionViewWillEnter() {
    this.date = new Date();
    this.monthNames2 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    this.todayMonth = this.date.getMonth() + 1;
    this.tesDay = new Date('2018-7-19');

    this.getDaysOfMonth();
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();

    this.month = this.date.getMonth() + 1;

    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else if (this.todayMonth > this.month) {
      this.currentDate = 998;
    } else {
      this.currentDate = 999;
    }

    

    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }

    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (var j = 0; j < thisNumOfDays; j++) {
      this.daysInThisMonth.push(j+1);
    }

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (var k = 0; k < (6-lastDayThisMonth); k++) {
      this.daysInNextMonth.push(k+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(var l = (7-lastDayThisMonth); l < ((7-lastDayThisMonth)+7); l++) {
        this.daysInNextMonth.push(l);
      }
    }
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
  }

  thisSunday(day){
    
    this.currentDay=new Date(this.currentYear + '-' + this.currentMonth + '-' + day).getDay()
    return this.currentDay;
  }


  clickTanggal(day) {
    let data : any;
    data.tanggal = day + '-' + this.currentMonth + '-' + this.currentYear;
    let dateString = this.currentYear + '-' + this.month + '-' + day;
    data.tanggalDateType = new Date(dateString.toString());

    console.log(dateString.toString());
    console.log('String Type = ' + tanggal);
    console.log('Date Type = ' + tanggalDateType);
    console.log('Today Date = ' + this.tesDay);

    if (this.tesDay <= tanggalDateType){
      console.log('Masuk Pak Eko');
    }
    
  }
}

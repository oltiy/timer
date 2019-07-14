import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  name = ' Study Zone';
 
  timeChoise;
  timeLeft;
  interval;
  timeCount=0;
  
  displayName =false  ;
  timeWork =true;
  checking =true;
  checkBtn = true;
  click = false;
  firstTime: any;
  dateNumber ;
  dateTotal;
  date;
  date2;
  date3;
  date3P=0;
  date4;
  timeStop;
  datePauseTime;
  datePauseTimeWithGet;
  pausedT =false;
  datePose =0;
  dateNewPose;
  pp;
  countPose ;
  totalCountPose=0;
  dateNewPoseGet;
  toltalDate4 =0;
  forShow=0;
  timePo = true;
  timeLeftFormat;
  forShowFormat;
  timeChoiseFormat;
  displayName2;
  counter =0;
  notFirst= false;

  

  

  constructor(){
   
}


  
  displayTime(){
    
    this.displayName = !this.displayName;
    if(this.displayName){alert("את בטוחה ?")}
  }
  displayTime2(){
    
    this.displayName2 = !this.displayName2;
    
  }
  startTimer() {
    
    if(this.checking){this.timeChoise = Math.floor(Math.random()*(2400-1200) + 1200);     
     this.dateTotal = new Date();
    this.firstTime = Math.floor(this.dateTotal.getTime()/1000);
    this.checking = false;
    this.checkBtn =false; 
    }
    ++this.counter;
    //this.playAudio();
    this.date = new Date();
   this.notFirst=false;
    this.timeWork =false;
    this.click =true;
    this.timePo= true;
    
   

    ;
   
    
  
    this.interval = setInterval(() => {

      do{
      this.date2 = new Date();
      this.date3=Math.floor((this.date2.getTime()-this.date.getTime())/1000);
      //this.date4=Math.floor((this.date2.getTime() -this.dateNewPose.getTime())/1000);
    this.forShow= this.timeCount +this.date3;
    this.forShowFormat= parseFloat((this.forShow).toFixed(2));
    this.timeLeft= (this.timeChoise -this.forShow)/60; 
    this.timeLeftFormat= parseFloat((this.timeLeft).toFixed(2));
    this.timeChoiseFormat= parseFloat((this.timeChoise/60).toFixed(2));
    
    
    }
    while(this.timeChoise<this.timeCount);

      if(this.timeChoise<this.forShow) {
        clearTimeout();
        this.checking = true;
        this.timeWork =true;
        this.playAudio();
      }
    },1000)
    this.timeCount = this.date3P;
    
  }


  pauseTimer() {
    if(this.counter===0){
      return;
    }
    else{
    this.date3P=this.date3 +this.date3P;
    this.timeWork =true;
    clearInterval(this.interval);
    this.click =false;
    this.pausedT= true;
    this.timePo =false;
    --this.counter;
    }
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "./assets/analog-watch-alarm_daniel-simion.wav";
    audio.load();
    audio.play();
  }


  title = 'timer';
}


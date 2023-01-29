class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
    // ... your code goes here
  }

  start(printTimeCallback) {
     this.intervalId = setInterval(() => {
       if (printTimeCallback) {
         printTimeCallback();
      }
      this.currentTime++;
     }, 10);
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
    //return Math.floor(this.currentTime / 6000);
    // ... your code goes here
  }

  getSeconds() {
    return (this.currentTime/100) % 60  ;
    // ... your code goes here
  }

  getCentiseconds() {
    return Math.floor((this.currentTime) % 100 ) ;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length ==2) return value.toString();

    return "0" + value.toString();
    // ... your code goes here
  }

  stop() {
    return clearInterval(this.intervalId)

    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
    // ... your code goes here
  }



  // let minutes=this.computeTwoDigitNumber(this.getMinutes())
  //   let seconds=this.computeTwoDigitNumber(this.getSeconds())
  //   let centiseconds=this.computeTwoDigitNumber(this.getCentiseconds())

  //   return minutes.toString()+':'+seconds.toString()+"."+centiseconds.toString(); 
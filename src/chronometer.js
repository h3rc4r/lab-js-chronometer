class Chronometer {
  
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
    // ... your code goes here
  }

  start(printTimeCallback) {
   
     //setTimeout(() => {this.currentTime=this.currentTime+1}, 1000);
    //if(printTimeCallback.length>=0){}
    // setTimeout(() => {this.currentTime=this.currentTime+2}, 3000);

    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
      }
      this.currentTime++;
    }, 1000);

    // ... your code goes here
  }

  getMinutes() {

    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value.toString().length === 2) return value.toString();

    return "0" + value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    console.log(seconds)

    return `${minutes}:${seconds}`;
    // ... your code goes here
  }
}

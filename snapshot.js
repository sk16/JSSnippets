window.watchForMe = 1;

function SnapShot(containerObj, varName, time){
  this.shots = [];
  this.time = time;
  this.o = containerObj;
  this.n = varName;
  this.recordingId = null;
  var self = this;
  setTimeout(function(){
    self.stopRecording();
  }, time);
}

SnapShot.prototype.startRecording = function(recordAfter){
  var self = this;
  recordAfter = !recordAfter ? this.time/20 : recordAfter;
  this.recordingId = setInterval(function(){
    self.record();
  }, recordAfter);
};

SnapShot.prototype.stopRecording = function(){
  clearInterval(this.recordingId);
  this.recordingId = null;
};

SnapShot.prototype.record = function(){
  var currVal = this.o[this.n];
  if(this.shots.indexOf(currVal) === -1) {
    this.shots.push(currVal);
    console.log("Recorded : "+currVal);
  }
};

SnapShot.prototype.scan = function(val) {
  return this.shots.indexOf(val) !== -1;
};

function test(){
  var totalRecordingTime = 5000; //ms
  var testStepCount = 10, runs = 0;
  var ss = new SnapShot(window, "watchForMe", totalRecordingTime);
  ss.startRecording();

  //Lets change values for 4000ms and at 400ms interval
  //Mock values for testVar
  var testTime = totalRecordingTime - 1000;
  var intervalId = setInterval(function(){
    if(++runs > testStepCount){
      clearInterval(intervalId);
      return;
    }
    window.watchForMe = getRandomInt(runs);
    console.log("watchForMe = "+window.watchForMe+" at "+runs+" run");
  }, Math.floor(testTime/testStepCount));

  //Lets check  for a val @ totalRecordingTime + 500ms
  setTimeout(function(){
    for(var i = 0; i < 10; i++){
      console.log((ss.scan(i) ? "Found " : "Not Found ") + i);
    }
    console.log(ss.shots);
  }, totalRecordingTime + 1000);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

test();
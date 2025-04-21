let raceNumber = Math.floor(Math.random() * 1000);
let runnerReg = true;
let runnerAge = 18; //add your age
if (runnerReg && runnerAge > 18) {
  raceNumber += 1000;
}
if (runnerReg && runnerAge > 18) {
  console.log(`You will race at 9:30 am and your race number is ${raceNumber}`);
} else if ((runnerReg = false && runnerAge > 18)) {
  console.log(`You will race at 11:00am and your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`you will race at 12:30pm and your race number is ${raceNumber}`);
} else {
  console.log("Please go see the registration desk");
}

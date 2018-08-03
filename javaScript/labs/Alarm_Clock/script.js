// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("script is running...");

function My_Alarm(time){
  return "Hey, Olivia, wake up! It's " + time + "!";
}

console.log(My_Alarm("7:00"));

function Mom_Alarm(time) {
  return "Hey, Mom, wake up! It's " + time + "!";
}

console.log(Mom_Alarm("7:00"));

function Family_Alarm(time, familyMember) {
  return "Hey, " + familyMember + ", wake up! It's " + time + "!";
}

console.log(Family_Alarm("7:00", "Mom"));

function Important_Alarm(message) {
  return message.toUpperCase();
}

console.log(Important_Alarm("wake up!"));

function Snooze_Alarm(time) {
  let newTime = time + 1;
  return "The alarm for " + time + " has been changed to " + newTime + ".";
}

console.log(Snooze_Alarm(8));


// Extension
function Wake_Everybody(numTimes) {
  let wakeUp = "";
  for (let i = 0; i < numTimes; i ++) {
    wakeUp += "Wake Up!\n";
  }
  return wakeUp;
}

console.log(Wake_Everybody(5));

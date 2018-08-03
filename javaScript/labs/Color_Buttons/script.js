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

// Use querySelector to store the div in a variable.
let redButton = document.querySelector('#red');
let blueButton = document.querySelector("#blue");
let greenButton = document.querySelector("#green");
let clearButton = document.querySelector("#clear");
// Use addEventListener to respond to a click event.
redButton.addEventListener('click', e => {
  console.log("You clicked the red button!");
  responseBox.style.background = 'red';
  let currentText = responseBox.innerText;
  responseBox.innerText = currentText + " RED";
})

blueButton.addEventListener("click", e => {
  console.log("You clicked the blue button!");
  responseBox.style.background = "blue";
  let currentText = responseBox.innerText;
  responseBox.innerText = currentText + " BLUE";
})

greenButton.addEventListener("click", e=> {
  console.log("You clicked the green button!");
  responseBox.style.background = "green";
  let currentText = responseBox.innerText;
  responseBox.innerText = currentText + " GREEN";
})

clearButton.addEventListener("click", e=> {
  responseBox.innerText = "";
  responseBox.style.background = "white";
})

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


/*
console.log("Running Click Events Script");

let boxes = document.querySelectorAll("#container1").child;

boxes.forEach(box => {
  box.addEventListener("click", e => {
    box.style.background = "red";
  })
})

*/
//task1
let box1 = document.querySelector("#box1");
box1.addEventListener("click", e => {
  box2.style.background = "red";
  box3.style.background = "red";
  box1.style.background = "red";
})

let box2 = document.querySelector("#box2");
box2.addEventListener("click", e => {
  box1.style.background = "pink";
  box3.style.background = "pink";
  box2.style.background = "pink";
})

let box3 = document.querySelector("#box3");
box3.addEventListener("click", e => {
  box2.style.background = "orange";
  box3.style.background = "orange";
  box1.style.background = "orange";
})

//task2

let box4 = document.querySelector("#box4");
box4.addEventListener("click", e=> {
  if (box4.classList.contains("active")) {
    box4.classList.remove("active");
  }
  else {
    box4.classList.add("active");
  }
})

let box5 = document.querySelector("#box5");
box5.addEventListener("click", e=> {
  if (!(box5.classList.contains("active"))) {
    box5.classList.add("active");
  }
  else {
    box5.classList.remove("active");
  }
})

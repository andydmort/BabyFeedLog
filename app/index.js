console.log('Hello world!');

import * as document from "document";
import { FileIOFitbit } from "./FileIO";
import { ScreenHistory } from "./ScreenHistory";

// Btn Handlers
const btnLeft = document.getElementById("btn-left");
btnLeft.addEventListener("click", (evt) => {
  console.log("Left CLICKED");
});
const btnRight = document.getElementById("btn-right");
btnRight.addEventListener("click", (evt) => {
  console.log("Right CLICKED");
});
const btnHistory = document.getElementById("btn-history");
btnHistory.addEventListener("click", (evt) => {
  console.log("History CLICKED");
});

const screenHistory = new ScreenHistory({
  btnRtnClickHandler: (evt)=>{
    console.log("Return CLICKED");
  }
});


const fileIO = new FileIOFitbit({ encoding: 'json' });


fileIO.write({one: "two"});

console.log(`read out of file: ${JSON.stringify(fileIO.read())}`);

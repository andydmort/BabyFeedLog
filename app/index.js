console.log('Hello world!');

import * as document from "document";
import { FileIOFitbit } from "./FileIO";

// Btn Handler
const btnLeft = document.getElementById("btn-left");

btnLeft.addEventListener("click", (evt) => {
  console.log("Left CLICKED");
});

const fileIO = new FileIOFitbit({ encoding: 'json' });


fileIO.write({one: "two"});

console.log(`read out of file: ${JSON.stringify(fileIO.read())}`);

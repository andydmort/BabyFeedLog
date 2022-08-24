console.log('Hello world!');

import * as document from "document";

// Btn Handler
const btnLeft = document.getElementById("btn-left");

btnLeft.addEventListener("click", (evt) => {
  console.log("Left CLICKED");
});
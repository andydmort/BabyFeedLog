console.log('Hello world!');

import * as document from "document";
import { FileIOFitbit } from "./FileIO";
import { ScreenHistory } from "./ScreenHistory";
import { ScreenMain } from "./ScreenMain";
import * as DateHelpers from "./DateHelpers.js";

let screenMain;
let screenHistory;

let date = new Date();

console.log(`Date to Json ${DateHelpers.DateToJson(date)}`);
console.log(`Date from Json ${DateHelpers.DateFromJson(DateHelpers.DateToJson(date))}`);
console.log(`Date formated ${DateHelpers.FormatDate(date)}`);


screenMain = new ScreenMain({
  btnLeftHandler: (evt)=>{
    console.log("LEFT clicked");
  },
  btnRightHandler: (evt)=>{
    console.log("RIGHT clicked");
  },
  btnHistHandler: (evt)=>{
    console.log("HISTORY clicked");
    screenMain.hide();
    screenHistory.show();
  } 
});

screenHistory = new ScreenHistory({
  btnRtnClickHandler: (evt)=>{
    screenHistory.hide();
    console.log("RETURN clicked");
    screenMain.show();
  }
});

screenMain.show();

const fileIO = new FileIOFitbit({ encoding: 'json' });


fileIO.write({one: "two"});

console.log(`read out of file: ${JSON.stringify(fileIO.read())}`);

console.log('Hello world!');

import * as document from "document";
import { FileIOFitbit } from "./FileIO";
import { ScreenHistory } from "./ScreenHistory";
import { ScreenMain } from "./ScreenMain";

let screenMain;
let screenHistory;

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

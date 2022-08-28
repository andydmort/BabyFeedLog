console.log('Hello world!');

import * as document from "document";
import { FileIOFitbit } from "./FileIO";
import { ScreenHistory } from "./ScreenHistory";
import { ScreenMain } from "./ScreenMain";
import * as DateHelpers from "./DateHelpers.js";
import { RecordList } from "./RecordList";

let screenMain;
let screenHistory;
// Create the RecordList
const fileIO = new FileIOFitbit({ encoding: 'json' });
const recordList = new RecordList({
  fileIoInterface: fileIO, 
  onRecord: (records)=>{
    screenHistory.setHistoryUI(records);
    // TODO: set the main screen item.
  }
});
// Create the screens
screenMain = new ScreenMain({
  btnLeftHandler: (evt)=>{
    console.log("LEFT clicked");
    recordList.addRecord("LEFT", new Date());
  },
  btnRightHandler: (evt)=>{
    console.log("RIGHT clicked");
    recordList.addRecord("RIGHT", new Date());
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
console.log("Setting previous history");
screenHistory.setHistoryUI(recordList.getRecords());
console.log("Showing main screen");
screenMain.show();




fileIO.write({one: "two"});

console.log(`read out of file: ${JSON.stringify(fileIO.read())}`);

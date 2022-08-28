import * as document from "document";
import { Screen } from "./Screen";
import { DateFromJson, FormatDate } from "./DateHelpers";

export class ScreenHistory extends Screen {
    constructor({
        id='history-screen__rect', 
        btnRtnId = 'history-screen__rtn-btn',
        btnRtnClickHandler = undefined,
        hide = true
    }){
        super(id, hide);
        // Return button
        this.btnRtn = document.getElementById(btnRtnId);
        this.setBtnHandler(this.btnRtn, btnRtnClickHandler);
    };

    setHistoryUI(records){
        for(let idx = 0; idx < records.length; idx++){
            const record = records[idx];
            const side = record.side;
            const date = DateFromJson(record.date);
            let uiItem = document.getElementById(`history-screen__item[${idx}]`);
            uiItem.text = `${side} ${FormatDate(date)}`;
        }    
    }

};
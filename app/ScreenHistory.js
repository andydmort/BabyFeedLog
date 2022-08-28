import * as document from "document";
import { Screen } from "./Screen";
import { DateFromJson, FormatDate } from "./DateHelpers";

export class ScreenHistory extends Screen {
    constructor({
        id='history-screen__rect', 
        btnRtnId = 'history-screen__rtn-btn',
        btnRtnClickHandler = undefined,
        hide = true,
        recordUiId = 'history-screen__item',
        numRecordItems = 10 // Specifies the number of ui screen items
    }){
        super(id, hide);
        // Return button
        this.btnRtn = document.getElementById(btnRtnId);
        this.setBtnHandler(this.btnRtn, btnRtnClickHandler);
        this.recordUiId = recordUiId;
        this.numRecordItems = numRecordItems;
    };

    setHistoryUI(records){
        for(let idx = 0; idx < this.numRecordItems; idx++){
            const uiItemId = `${this.recordUiId}[${idx}]`;
            console.log(`uiItemId: ${uiItemId}`);
            const uiItem = document.getElementById(uiItemId);
            const record = records[idx];
            if(record){
                const side = record.side;
                const date = DateFromJson(record.date);
                uiItem.text = `${FormatDate(date)} | ${side}`;
                uiItem.style.display = 'inline';
            }
            else{
                uiItem.style.display = 'none';
            }
        }    
    }

};
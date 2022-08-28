import * as document from "document";
import { DateFromJson, FormatDate } from "./DateHelpers";
import { Screen } from "./Screen";

export class ScreenMain extends Screen {
    constructor({
        id="main-screen__rect",
        btnLeftId="btn-left",
        btnLeftHandler = undefined,
        btnRightId="btn-right",
        btnRightHandler = undefined,
        btnHistId = "btn-history",
        btnHistHandler = undefined,
        sideTextId = 'main-screen__center-side-text',
        dateTextId = 'main-screen__center-date-text',
        hide = true
    }){
        super(id, hide);
        // Right button
        this.btnRight = document.getElementById(btnRightId)
        this.setBtnHandler(this.btnRight, btnRightHandler);
        // Right button
        this.btnLeft = document.getElementById(btnLeftId)
        this.setBtnHandler(this.btnLeft, btnLeftHandler);
        // Right button
        this.btnHist = document.getElementById(btnHistId)
        this.setBtnHandler(this.btnHist, btnHistHandler);
        // Side text
        this.sideText = document.getElementById(sideTextId);
        // Date text
        this.dateText = document.getElementById(dateTextId);
    }

    setMainUi(record){
        if(record)
        {
            this.dateText.text = FormatDate(DateFromJson(record.date));
            this.sideText.text = record.side;
        }
    }
}
import * as document from "document";
import { Screen } from "./Screen";

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
};
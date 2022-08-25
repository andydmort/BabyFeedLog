import * as document from "document";
import { Screen } from "./Screen";

export class ScreenHistory extends Screen {
    constructor({
        id='history-screen', 
        btnRtnId = 'history-screen__rtn-btn',
        btnRtnClickHandler = undefined
    }){
        super(id);
        // Return button
        this.btnRtn = document.getElementById(btnRtnId);
        if(btnRtnClickHandler)
            this.btnRtn.addEventListener("click", btnRtnClickHandler);
    };
};
import * as document from "document";
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
    }
}
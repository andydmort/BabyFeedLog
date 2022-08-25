import * as document from "document";

export class Screen{
    constructor(id, hide = true){
        this.el = document.getElementById(id);
        if(hide)
            this.hide();
    }
    hide(){
        this.el.style.display = "none";
    }
    show(){
        this.el.style.display = "inline";
    }

    setBtnHandler(el, handler){
        if(!el)
            throw Error(`Unable to set handler on unassigned`);
        if(handler)
            el.addEventListener("click", handler);
    }

};
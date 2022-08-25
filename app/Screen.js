import * as document from "document";

export class Screen{
    constructor(id){
        this.el = document.getElementById(id);
    }
    hide(){
        this.el.style.display = "none";
    }
    show(){
        this.el.style.display = "inline";
    }

};
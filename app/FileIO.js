import * as fs from "fs";

/**
 * Specifies an interface for FileIO
 */
export class FileIOInterface {
    constructor(){}
    read(){ throw Error("Read function has not be overriden."); }
    write(){ throw Error("Write function has not be overriden."); }
}

/**
 * Object for Reading and writing using the Fitbit File IO api.
 */
export class FileIOFitbit extends FileIOInterface{
    /**
     * @param {Object} Settings Object the specifies the settings for the object.  
     * @param {String} Settings.fileName Specifies the file name.
     * @param {String} Settings.encoding Specifies the file encoding.This should be a valid
     * encoding for the Fitbit fileIO. 
     * https://dev.fitbit.com/build/guides/file-system/#:~:text=The%20API%20is,in%20raw%20bytes.
     */
    constructor({fileName = 'file.txt', encoding = "UTF-8"}){
        this.fileName = fileName;
        this.encoding = encoding;
    }

    
    read(){
        return fs.readFileSync(this.fileName, this.encoding);
    }

    write(data){
        fs.writeFileSync(this.fileName, data ,this.encoding);  
    }

}
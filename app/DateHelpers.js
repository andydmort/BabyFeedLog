
export function DateToJson(date){
    return date.toJSON();
}

export function DateFromJson(jsonStr){
    return new Date(jsonStr);
}

function Pad(val){
    if(val < 10)
        return `0${val}`; 
    else
        return `${val}`;
}

function FormatTime(hours, mins){
    let amPm = "";
    if(hours < 12)
        amPm = "AM";
    else
        amPm = "PM";
    let formatedHours = (hours+1)%12;
    let formatedMins = mins+1;

    return `${Pad(formatedHours)}:${Pad(formatedMins)} ${amPm}`;
}

function FormatDay(month, day){
    return `${Pad(month+1)}/${Pad(day)}`;
}

export function FormatDate(date){
    let hours = date.getHours(); // 0 - 23
    let mins = date.getMinutes(); // 0 - 59

    let month = date.getMonth(); // 0 - 11
    let day = date.getUTCDate(); // 1 - 31

    return `${FormatDay(month, day)} ${FormatTime(hours, mins)}`;
}
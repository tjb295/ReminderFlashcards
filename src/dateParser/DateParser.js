//helper method to fix the date formatting between the DatePicker output
//and the alarm schedule date input
//DatePicker outputs as YYYY-MM-DD HH:MM
//Alarm Sheduler takes in as DD-MM-YYYY HH:MM:SS

export const DateParser = Date => {
    //begin by picking the first two and saving as month
    var day, month, year, hour, minute;

    var fields = Date.split('-');
    year = fields[0];
    month = fields[1];

    //split the remaining DD HH:MM
    var fields2 = fields[2].split(" ");
    day = fields2[0];

    //split the HH:MM
    var fields3 = fields2[1].split(":");
    hour = fields3[0];
    minute = fields3[1];

    const end_res = (day + "-" + month + "-" + year + " "
                         + hour + ":" + minute + ":" + "00");
    
    console.log(end_res + " Is the time ");

    return end_res;


}
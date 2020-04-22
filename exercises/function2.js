// Write a JavaScript function to get the last day of a month.

function getLastDayOfMonth(month, year){

    // Last day in month -> 0
    return new Date(year, month, 0).getDate();

}

// 0 - January ... 11 - December
console.log(getLastDayOfMonth(11, 2019));
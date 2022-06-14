const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

function getFormattedDate(incomingDate){
    const day = incomingDate.getDay();
    const nameDay = days[day]

    let month = incomingDate.getMonth() + 1;

    if(month < 10)
        month = "0" + month;

    let date = incomingDate.getDate();

    if(date < 10)
        date = "0" + date;

    let year = incomingDate.getFullYear();

    let hours = incomingDate.getHours();

    if(hours < 10)
        hours = "0" + hours;

    let minutes = incomingDate.getMinutes();

    if(minutes < 10)
        minutes = "0" + minutes;


    // console.log(nameDay);
    // console.log(month);
    // console.log(date);
    // console.log(year);
    // console.log(hours);
    // console.log(minutes);

    return `${date}.${month}.${year} ${hours}:${minutes} ${nameDay}`
}


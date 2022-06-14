function dateDiff(startingDate, endingDate) {
    
    let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
        endingDate = new Date().toISOString().substr(0, 10);   
    }

    let endDate = new Date(endingDate);

    if (startDate > endDate) {
        let swap = startDate;
        startDate = endDate;
        endDate = swap;
    }

    let startYear = startDate.getFullYear();
    let february = (startYear % 4 === 0 && startYear % 100 !== 0) 
                    || startYear % 400 === 0 ? 29 : 28;
    let daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let yearDiff = endDate.getFullYear() - startYear;
    let monthDiff = endDate.getMonth() - startDate.getMonth();

    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }
    
    let dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
        if (monthDiff > 0) {
            monthDiff--;
        } else {
            yearDiff--;
            monthDiff = 11;
        }
        dayDiff += daysInMonth[startDate.getMonth()];
    }


    let DiffDates = new Object();
    DiffDates.years = yearDiff;
    DiffDates.month = monthDiff;
    DiffDates.days = dayDiff;

    return DiffDates;
}

module.exports = function calculateTime() {
    let then = new Date("1939-01-01");
    let now = new Date();

    let dDate = new dateDiff(then,now);
   
    return dDate;
}


module.exports = { dateDiff }

let countingSundays = (firstYear, lastYear) => {

    let sundayCount = 0
    let currentYear
    let currentMonth

    /* Number of days for each month in the year */
    let daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    /* Starting Day of Week -> 0 is sunday, 6 is saturday. 
        Requires lookup to work from given year
    */
    let startingDayOfMonth = new Date(firstYear, 0, 1).getDay()

    for(currentYear = firstYear; currentYear <= lastYear; currentYear++){

        /* If the current year meets the conditions to be a leap year, then edit the 
            daysInMonth array so that feb has 29 days 
                - The current year is divisble by 4 (divides by 4 with no remainder) and isn't a century
                    (divides by 100 without a remainder)
                - Or the current year divides by 400 without a remainder
        */
        if((currentYear % 4 === 0 && currentYear % 100 != 0 )|| currentYear % 400 == 0){
            daysInMonth[2] = 29
        }else{
            daysInMonth[2] = 28
        }

        /* Go through each month */
        for(currentMonth = 1; currentMonth <= 12; currentMonth++){

            /* If the starting day of the month is a Sunday, then add 1 to the sunday count */
            if(startingDayOfMonth === 0){
                sundayCount = sundayCount + 1
            }

            /* Calculate the starting day for the next month */
            console.log('Starting day of ' + currentMonth + ' ' + currentYear + ' is ' + startingDayOfMonth)
            startingDayOfMonth = (startingDayOfMonth + daysInMonth[currentMonth] % 7) % 7
        }
    }
    
    return sundayCount
}

/* Check Solution */
console.log('Result is ' + countingSundays(1901, 2000))
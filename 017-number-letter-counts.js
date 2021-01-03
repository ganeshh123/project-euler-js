let strings = {
    'units' : [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    'tens' : ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
}

let numberLetterCounts = (limit) => {

    let sum = 0
    let i

    for(i = 1; i <= limit; i++){
        if( i < 20){
            numberString = strings['units'][i]
        }else if(i < 100){
            numberString = strings['tens'][i / 10 | 0] + strings['units'][i % 10]
        }else if(i < 1000){
            //sum = sum + strings['units'][i].length
        }
        console.log(numberString)
        sum = sum + numberString.length
    }

    return sum
}

/* Check Solution */
console.log('Result is ' + numberLetterCounts(52))
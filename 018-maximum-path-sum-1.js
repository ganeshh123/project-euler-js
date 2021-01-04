let logTriangle = (triangle) => {
    console.log('----------')
    triangle.forEach((row) => {
        console.log(row)
    })
    console.log('----------')
}



let maximumPathSumI = (triangle) => {

    let row
    let column

    console.log('Initial ')
    logTriangle(triangle)

    console.log('')
    console.log('Trace :')

    /* Go through each row (array index ) from first to second-last row */
    for(row = (triangle.length - 2); row >= 0; row --){

        /* Go through each valid column for the row, number of columns equals row number in a 
            triangle structure */
        for(column = 0; column <= row; column++){
            let leftPathValue = triangle[row+1][column]
            let rightPathValue = triangle[row+1][column+1]
            /* Add to Cell the value of the path below that has the max value */
            triangle[row][column] = triangle[row][column] + Math.max(leftPathValue, rightPathValue)
            logTriangle(triangle)
        }
    }

    /* Return value of first cell as this has the value of the largest path */
    return triangle[0][0]
}

let triangle1 = [
    [3, 0, 0, 0],
    [7, 4, 0, 0],
    [2, 4, 6, 0],
    [8, 5, 9, 3]
    ]

let triangle2 = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 04, 82, 47, 65],
    [19, 01, 23, 75, 03, 34],
    [88, 02, 77, 73, 07, 63, 67],
    [99, 65, 04, 28, 06, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23],
    ]


/* Check Solution */
console.log('Result is ' + maximumPathSumI(triangle1))
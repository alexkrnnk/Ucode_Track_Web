let beginRange = prompt("Enter range start value.", '1')
let endRange = prompt("Enter end start value.", '100')

checkDivision(beginRange, endRange);

function checkDivision(beginRange, endRange) {
    let description = " - "
   
    for(let i = beginRange; i <= endRange; i++){
        if (i % 2 === 0) {
            description = " is even"
        }

        if (i % 3 === 0) {
            description = description.concat(", a multiple of 3")
        }

        if(i % 10 == 0) {
            description = description.concat(", a multiple of 10")
        }

        console.log(i + description + "\n")
    }
}


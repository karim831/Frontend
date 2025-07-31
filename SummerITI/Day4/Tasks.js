function Task1(){
    var num = prompt("Enter the number to test if it's even or odd: ");
    return num % 2 ? "Odd" : "Even";
}

function Task2(){
    var input = prompt("Enter an array of numbers in format 1,2,3...").split(',').map(s => parseInt(s));
    var min = Number.MAX_SAFE_INTEGER,max = Number.MIN_SAFE_INTEGER;
    console.log(input);
    input.forEach(i => {
        if(i > max)
            max = i;
        if(i < min)
            min = i;
    })

    return `Maximum = ${max} and Minimum = ${min}`;
}

function Task3(){
    var input = parseInt((prompt("Enter the month number <from 1(January) => 12(December) >")));
    for(var i=1;i<=input;i++){
        if(input == i){
            if(input == 2)
                console.log("28 Days");
            else
                console.log("30 Days");
        }
            
    }
}


function Task4(){
    var input = prompt("Enter degrees of students in format 1,2,3...").split(',').map(s => parseInt(s));
    var min = Number.MAX_SAFE_INTEGER,max = Number.MIN_SAFE_INTEGER,sum = 0;
    input.forEach(i => {
        if(i > max)
            max = i;
        if(i < min)
            min = i;
        sum += i;
    })

    return `Maximum = ${max} and Minimum = ${min} and Average = ${sum/input.length}`;
}
function task1(name){
    return `Hello ${name}`;
}


// --------------------

function task2(){
    let product = {
        name: "Lenovo",
        price: 50000,
        type: "labtop"
    };

    
    let {name, price, type} = product;
    return `name = ${name}, price = ${price}, type = ${type}`; 
}

// -----------------------

function task3(numbers){
    return numbers.filter(n => n%2 != 0);
}


// ------------------------

const task4 = (...students) => students.length;

// ------------------------


function task5(){
    const array1 = [10,20,30], array2 = [40,50,60]; 
    return ((...array) => array)(...array1,...array2);
}

// --------------------------

function task6(){
    let name1 = "karim", name2 = "osama";
    [name1,name2] = [name2,name1];
    return `name1 = ${name1}, name2 = ${name2}`;
}



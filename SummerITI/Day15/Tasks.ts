interface Obj{
    name:string,
    position:string,
    salary:number
}

let printObject = (object:Obj):void => {
    console.log(
        `Your Name Is ${object.name}`,
        `Your Position Is ${object.position}`,
        `Your Salary Is ${object.salary}`
    );
}
printObject({name:"karim",position:"Developer",salary:2000});

// ----------------------------------



let checkType = (variable: string|number):void => {
    if(typeof variable === "string")
        console.log("The Variable is String");
    else if(typeof variable === "number")
        console.log("The Variable is Number");
    else
        console.log("Error Type !");
}

checkType("number");
checkType(2000);

// --------------------------------


let returnFullName = (firstName:string,lastName?:string):string => {
    if(lastName)
        return firstName +" "+ lastName;
    return firstName;
}
console.log(returnFullName("Karim"));
console.log(returnFullName("Karim","Osama"));


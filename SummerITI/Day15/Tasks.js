var printObject = function (object) {
    console.log("Your Name Is ".concat(object.name), "Your Position Is ".concat(object.position), "Your Salary Is ".concat(object.salary));
};
printObject({ name: "karim", position: "Developer", salary: 2000 });
// ----------------------------------
var checkType = function (variable) {
    if (typeof variable === "string")
        console.log("The Variable is String");
    else if (typeof variable === "number")
        console.log("The Variable is Number");
    else
        console.log("Error Type !");
};
checkType("number");
checkType(2000);
// --------------------------------
var returnFullName = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    return firstName;
};
console.log(returnFullName("Karim"));
console.log(returnFullName("Karim", "Osama"));

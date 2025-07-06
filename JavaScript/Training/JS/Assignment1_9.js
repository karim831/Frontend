// Method1

() => {
    return;
    console.log("Iam In Console");
    document.write("Iam In Page");
}


// Method2
    console.log = function(){};
    document.write = function(){};
    console.log("Iam In Console");
    document.write("Iam In Page");


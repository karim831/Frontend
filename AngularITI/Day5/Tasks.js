
// Function to check if a string contains a specific character

function Task1(string,character){
    let array = String(string).split('');
    for(let i=0;i<array.length;i++){
        if(array[i] === String(character))
            return true;
    }
    return false;
}

// Create a function to reverse a string

function Task2(string){
    let array = String(string).split('');
    return array.reduceRight((p,c) => p+c);
}


//  Function to replace a word in a sentence with another word

function Task3(sentence,oldWord,newWord){
    let s = String(sentence),ow = String(oldWord), nw = String(newWord);

    let arr = s.split(ow),output = "";
    console.log(arr);
    if(s.indexOf(ow) == 0)
        output += nw;
    for(let i=0;i<arr.length;i++){
        output += arr[i];
        if(i != arr.length-1)
            output += nw;
    }
    if(s.lastIndexOf(ow) == s.length-1)
            output += nw;
    return output;
}


// Extract the first letter of each word in a sentence

function Task4(sentence){
    let s = String(sentence);
    return s.split(' ').map(s => s[0]);
}
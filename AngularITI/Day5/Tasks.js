
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
    let output = "";
    for(let i=0;i<s.length;i++){
        let sub = s.substring(i,i+nw.length);
        if(sub === ow){
            output += nw;
            i += nw.length-1;
        }
        else{
            output += s[i];
        }
    }
    return output;
}   


// Extract the first letter of each word in a sentence

function Task4(sentence){
    let s = String(sentence);
    return s.split(' ').map(s => s[0]);
}
function Task1(){
    function* numberGenerator() {
      for (let i = 1; i <= 10; i++) {
        yield i;
      }
      console.log("انتهى التكرار");
    }
    
    const gen = numberGenerator();
    for (let num of gen) {
      console.log(num);
}

}

// -----------------------

function Task2(){
    function* letterGenerator(word){
        for(let letter of word)
            yield letter;
    }

    const gen = letterGenerator("word");
    for(let letter of gen)
        console.log(letter);
}


// ----------------------------

function Task3(){
    class Student{
        constructor(_name, _age){
            this._name = _name;
            this._age = _age;
        }
        print(){
            console.log(`Name : ${this._name} , Age : ${this._age}`);
        }
    }

    student = new Student("Karim",22);
    student.print();
}




// --------------------------
function Task4(){
    class Car{
        constructor(_model, _year){
            this._model = _model;
            this._year = _year;
        }
    
        print(){
            console.log(`السيارة جاهزة للتشغيل!`);
        }
    }

    car = new Car("Tiota","2022");
    car.print();
}





// ---------------------------

function Task5(){
    const successPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("تمت العملية بنجاح");
      }, 3000);
    });

    successPromise.then(message => {
      console.log(message);
    });
}



// ----------------------------


function Task6(){
    const failPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("حدث خطأ");
      }, 2000);
    });
    
    failPromise.catch(error => {
      console.log(error);
    });

}





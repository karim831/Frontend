var user = (function(){
    var user = {
        userName: "",
        email: "",
        role: ""
    };
    return {
        initUser: function(userName,email,role){
            user.userName = userName;
            user.email = email;
            user.role = role;
            return user; 
        },
        getUser: () => user
    };
})()

function printUser({userName,email,role}){
    console.log(
        `userName: ${userName},
        email: ${email},
        role: ${role}`
    );
}




// --------------------------------


var getNewCar = (
    function(){
        function Car(brand, model, year){
            return {
                brand,
                model,
                year        
            }
        }
        return (brand, model, year) => new Car(brand, model, year);
    }
)();


// --------------------------------


var schoolSystem = (
    function(){
        var students = new Set();

        return {
            setStudent: (studentName) => {
                students.add(studentName);
                return studentName;
            },
            printNumberOfStudents: () => students.size
        }
    }
)();


// ---------------------------------------

var correctSystem = (
    function(){
        var students = new Map([["Ahmed",50],["Mohamed",79],["karim",70]]);

        return {
            printPassStudents: () => {
                students.forEach((v,k) => {
                    if(v > 70)
                        console.log(`student ${k} Passed with degree = ${v}`);
                });
            }
        }
    }
)();

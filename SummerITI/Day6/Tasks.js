var student = {
    name: "Kareem Osama Asayed",
    age: 22,
    degree: 100
}

for(let p in student)
    console.log(p + " : " + student[p]);


student['name'] = student['name'] + 'AbulRahman';

student.course = 'JS';


delete student.age;
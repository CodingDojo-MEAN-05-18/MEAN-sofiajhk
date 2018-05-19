// Challenge 1: write a function that accepts an array of students
// and prints all the students' names and their cohorts

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuch', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'},
];

for (let student of students){
    console.log(`Name: ${student.name}, Cohort: ${ student.cohort }`)
};

// Challenge 2: write a function that accepts an object of users 
// divided into employees and managers and logs the information to the console

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}   
    ]
};

function challengeTwo(object){
    for (let key in object){
        console.log(key.toUpperCase());
        for (let i = 0 ; i < object[key].length; i++){
            let num = i + 1;
            let fname = object[key][i].first_name;
            let lname = object[key][i].last_name;
            let length = fname.length + lname.length;
            console.log(`${num} - ${lname}, ${fname} - ${length}`);
        }
    }
};

challengeTwo(users)


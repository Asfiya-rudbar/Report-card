
// // Two ways to declare objects
// // i) Literals
// // ii) Constructor
// // One more concept in object singleton
// // Whenever object is declared by Construtor method it is known as singleton

// const user=[
//     {
//         username: "Asfiya Rudbar",
//         id: "111",
//         class: "12",
    
//         subjects:[
//             {
//                 subject: "Maths",
//                 marks:87,
//             },
//             {
//                 subject: "Physics",
//                 marks:90,
//             }, 
//             {
//                 subject: "DSA",
//                 marks:80,
//             },
    
//         ],
        
//     },

//     {
//         username: "Rafia Naeem",
//         id: "112",
//         class: "12",
      
//         subjects:[
//             {
//                 subject: "Maths",
//                 marks:70,
//             },
//             {
//                 subject: "Physics",
//                 marks:60,
//             }, 
//             {
//                 subject: "DSA",
//                 marks:82,
//             },
    
//         ],
        
//     },

//     {
//         username: "Laiba Nadeem",
//         id: "113",
//         class: "12",
//         subjects:[
//             {
//                 subject: "Maths",
//                 marks:67,
//             },
//             {
//                 subject: "Physics",
//                 marks:80,
//             }, 
//             {
//                 subject: "DSA",
//                 marks:74,
//             },
    
//         ],
        
//     }
// ];
// function totalMarks(subjects){
//     let total = 0;
//     for (let i=0; i<subjects.length; i++){
//         total += subjects[i].marks;
//     }
//     return total;
// }
// function percentage(subjects) {
//      return (totalMarks(subjects)/ (subjects.length *100))*100;
// }

// console.log(percentage(user.subjects));

// function grade (percentage){
//     if(percentage>=80) return "A+";
//     else if(percentage>=70) return "A";
//     else if(percentage>=60) return "B";
//     else if(percentage>=50) return "C";
//     else return "F";
// }


// let inputName = prompt("Please input your Name");
// let inputId =  prompt("Please input your Id");


// let student = null;
// for(let i = 0; i < user.length; i++){
//     if((inputName === user[i].username) && (inputId === user[i].id)){
//     student= user[i];
//     break;
//     }
// }


// if(student){
//     const studentPercentage = percentage(user.subjects);
    
    
    
//     document.getElementById("report-card").innerHTML=`
//     <p><strong>Name:<strong> ${user["username"]}</p>
//     <p><strong>Id:<strong> ${user["id"]}</p>
//     <p><strong>Class:<strong> ${user["class"]}</p>
//     <p><strong>Marks:<strong> ${totalMarks(user.subjects)}</p>
//     <p><strong>Percentage:</strong> ${studentPercentage.toFixed(2)}%</p>
//     <p><strong>Grade:</strong> ${grade(studentPercentage)}</p>
    
//     `;
// }

// else{

// }









const users = [
    {
        username: "Asfiya Rudbar",
        id: "111",
        class: "12",
        subjects: [
            { subject: "Maths", marks: 87 },
            { subject: "Physics", marks: 90 },
            { subject: "DSA", marks: 80 },
        ],
    },
    {
        username: "Rafia Naeem",
        id: "112",
        class: "12",
        subjects: [
            { subject: "Maths", marks: 70 },
            { subject: "Physics", marks: 60 },
            { subject: "DSA", marks: 82 },
        ],
    },
    {
        username: "Laiba Nadeem",
        id: "113",
        class: "12",
        subjects: [
            { subject: "Maths", marks: 67 },
            { subject: "Physics", marks: 80 },
            { subject: "DSA", marks: 74 },
        ],
    }
];

function totalMarks(subjects) {
    let total = 0;
    for (let i = 0; i < subjects.length; i++) {
        total += subjects[i].marks;
    }
    return total;
}

function percentage(subjects) {
    return (totalMarks(subjects) / (subjects.length * 100)) * 100;
}

function grade(percentage) {
    if (percentage >= 80) return "A+";
    else if (percentage >= 70) return "A";
    else if (percentage >= 60) return "B";
    else if (percentage >= 50) return "C";
    else return "F";
}

let inputName = prompt("Please input your Name");
let inputId = prompt("Please input your Id");

let student = null;
for (let i = 0; i < users.length; i++) {
    if ((inputName === users[i].username) && (inputId === users[i].id)) {
        student = users[i];
        break;
    }
}

if (student) {
    const studentPercentage = percentage(student.subjects);
    
    document.getElementById("report-card").innerHTML = `
        <p><strong>Name:</strong> ${student.username}</p>
        <p><strong>Id:</strong> ${student.id}</p>
        <p><strong>Class:</strong> ${student.class}</p>
        <p><strong>Marks:</strong> ${totalMarks(student.subjects)}</p>
        <p><strong>Percentage:</strong> ${studentPercentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade(studentPercentage)}</p>
    `;
} else {
    document.getElementById("report-card").innerHTML = `
        <p>No student found with the provided name and ID.</p>
    `;
}


// Even generator
// 

// function generator(){
//     let inputValue = document.getElementById('inputValue').value;
//     let i = 0;
//     let value = '';
//     while (i <= inputValue) {
//         if(i % 2 === 0){
//             value += `${i} `;
//         }
//         i++;
//     }
//     document.getElementById('result').innerHTML = value;
// }
// let i = 0;
// do{
//     console.log("Asfiya Rudbar");
//     i++;
// }
// while (i >= 9);

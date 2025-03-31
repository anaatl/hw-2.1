// Student information
let studentName = "Ana";
let studentSurname = "Atl";
let fullName = studentName + " " + studentSurname;

// Student score by modules
let introductionModuleScore = 10;
let gitModuleScore = 13;
let jsModuleScore = 19;

// Calculating the average score
let averageScore;
averageScore = (introductionModuleScore + gitModuleScore + jsModuleScore)/3;

// Console output with template strings
console.log(`Student Full Name: ${fullName}`);
console.log(`Student First Name: ${studentName.slice(0,1)}. ${studentSurname}`);
console.log(`Scores for Introduction: ${introductionModuleScore}`);
console.log(`Scores for Git: ${gitModuleScore}`);
console.log(`Scores for JavaScript: ${jsModuleScore}`);
console.log(`Average mark of ${fullName} equals ${averageScore}`);
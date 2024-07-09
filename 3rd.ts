//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// (task 3)
let personName:string='shahid';
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
let titel_case=personName[0].toUpperCase()+personName.slice(1).toLowerCase();
console.log(titel_case);

// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

//creates an array of magicians
let magicians:string[]=['Aqbar Ali','Haris','Zahid']
function show_magicians(magicians:string[]):void{
    magicians.forEach(magician=>{console.log(magician);
    })
}
show_magicians(magicians)
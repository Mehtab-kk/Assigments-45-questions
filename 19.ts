//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.


let guestList4:  string[]=['Ahsan','Pervaiz','Hasnain']
//person can not attend dinner
let cannotcome4:string=guestList4[2]
//print a message with person name
// console.log(cannotcome1 + " " + 'can,t make the dinner');
//new person attend the dinner
let person4 :string='Rabnawaz'
// replace name into array
guestList4[guestList4.indexOf(cannotcome4)]=person4
// now print message to all
 guestList4.forEach(name=>{
    // console.log(`Dear, ${name} I found a biggest dinner so i invited more guest`);
    
 })
//beggining guest
let name5:string='Gulzaman'
guestList4.unshift(name5)

//middle guest
guestList4.splice(2,0,'Wazeer')


//end guest
let name6:string='Shahid'
guestList4.push(name6)

// now print a message
guestList4.forEach(name=>{
    // console.log(`Dear, ${name} you are invited for dinner`);
    });
    console.log(guestList4.length+" "+ "guest"+" "+"are invited for a dinner");
    
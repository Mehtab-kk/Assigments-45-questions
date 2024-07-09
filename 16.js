"use strict";
//16. More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
//bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
//copy exercise 15
let guestList2 = ['Ahsan', 'Pervaiz', 'Hasnain'];
//person can not attend dinner
let cannotcome1 = guestList2[2];
//print a message with person name
// console.log(cannotcome1 + " " + 'can,t make the dinner');
//new person attend the dinner
let person1 = 'Rabnawaz';
// replace name into array
guestList2[guestList2.indexOf(cannotcome1)] = person1;
// now print message to all
guestList2.forEach(name => {
    console.log(`Dear, ${name} I found a biggest dinner so i invited more guest`);
});
//beggining guest
let name1 = 'Gulzaman';
guestList2.unshift(name1);
//middle guest
guestList2.splice(2, 0, 'Wazeer');
//end guest
let name2 = 'Shahid';
guestList2.push(name2);
// now print a message
guestList2.forEach(name => {
    console.log(`Dear, ${name} you are invited for dinner`);
});

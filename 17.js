"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t 
//arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message 
//saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your 
//list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know 
//they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your 
//list to make sure you actually have an empty list at the end
// of your program.
//repeat exercise
let guestList3 = ['Ahsan', 'Pervaiz', 'Hasnain'];
//person can not attend dinner
let cannotcome2 = guestList3[2];
//print a message with person name
// console.log(cannotcome1 + " " + 'can,t make the dinner');
//new person attend the dinner
let person2 = 'Rabnawaz';
// replace name into array
guestList3[guestList3.indexOf(cannotcome2)] = person2;
// now print message to all
guestList3.forEach(name => {
    // console.log(`Dear, ${name} I found a biggest dinner so i invited more guest`);
});
//beggining guest
let name3 = 'Gulzaman';
guestList3.unshift(name3);
//middle guest
guestList3.splice(2, 0, 'Wazeer');
//end guest
let name4 = 'Shahid';
guestList3.push(name4);
// now print a message
guestList3.forEach(name => {
    // console.log(`Dear, ${name} you are invited for dinner`);
});
//print 1st line
console.log('I have space only two guests');
//remove guest
console.log(guestList3);
while (guestList3.length > 2) {
    let removeguest = guestList3.pop();
    // now print can,t invite
    console.log(`dear, ${removeguest} sorry i can,t invite for dinner`);
}
// now message stil guest
guestList3.forEach(name => {
    console.log(`Dear, ${name} you are still invited to dinner!`);
});
guestList3.pop();
guestList3.pop();
console.log(guestList3);
//ends exercise 17

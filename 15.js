"use strict";
//15. Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.
// (task 15)
// array of list
let guestList1 = ['Ahsan', 'Pervaiz', 'Hasnain'];
//person can not attend dinner
let cannotcome = guestList1[2];
//print a message with person name
console.log(cannotcome + " " + 'can,t make the dinner');
//new person attend the dinner
let person = 'Rabnawaz';
// replace name into array
guestList1[guestList1.indexOf(cannotcome)] = person;
// now print message to all
guestList1.forEach(name => {
    console.log(`Dear, ${name} you are invited to dinner`);
});

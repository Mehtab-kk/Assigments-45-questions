"use strict";
//14. Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people you’d like to
//invite to dinner. Then use your list to print a message to each person, inviting 
//them to dinner.
// (task 14)
// create an array called 'guestlist'
let guestlist = ['Ahsan', 'Pervaiz', 'Hasnain'];
// print an invitation message for each list
guestlist.forEach(person => {
    console.log(`Dear ${person} You have invited to dinner! we would be honored to have your company`);
});

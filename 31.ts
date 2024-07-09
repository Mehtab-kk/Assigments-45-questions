// 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
let Users:string[]=['admin','eric','mehtab','zeeshan','shahid']
if(Users.length>0){
for(let username1 of Users){
    if(username1==='admin'){console.log('Hello admin, would you like to see a status report?');
        }
        else{console.log(`Hello ${username1} thank you for logging in again.`);
        }
}
}
//
else{console.log('we need to find some users');
}
let nullname:string[]=[]
if(nullname.length>0){
for(let user of nullname){
    console.log('user:'+user);
    }}
    else{console.log('we need to find some users')
    }


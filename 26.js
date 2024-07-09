"use strict";
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//passing condition
let alien_color2 = 'Green';
if (alien_color2 === 'Green') {
    console.log('congratulations! you just earned 5 points for shooting the green alien.');
}
else {
    console.log('congratulations! you just earned 10 points for shooting the non-green alien.');
}
// now failing test
let alien_color3 = 'red';
if (alien_color3 === 'Green') {
    console.log('congratulations! you just earned 5 points for shooting the green alien.');
}
else {
    console.log('congratulations! you just earned 10 points for shooting the non-green alien.');
}

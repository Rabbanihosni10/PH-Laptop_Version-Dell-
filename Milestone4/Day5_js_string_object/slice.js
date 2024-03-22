//slice can be use to divide the string
//.slice(1st idx,last idx)
//.split("")
//.join("")

const address="Andorkilla";
const part=address.slice(2,9);
console.log(part);

const sentence="I am a good and hardworking person!";
console.log(sentence.split(' '));
// (2,7)--> start index : 2 ; end index: 6;
// (3,7)--> start index : 3 ; end index: 6;
console.log(sentence.split("a"));

const friendsStr="Rahim,Kahimz,dahim,lahim,fahim,sajid";
const friends=friendsStr.split(",");
console.log(friends);
const realFriend= [ 'Rahim', 'Kahimz', 'dahim', 'lahim', 'fahim', 'sajid' ]
console.log(realFriend);
console.log(realFriend.join());
console.log(realFriend.join("|"));
console.log(realFriend.join("?"));

// type1 reverse
const sentence="I am learning Web Dev.";
 //const result= ".veD beW gninrael ma I";
let reverse='';
for(const letter of sentence){
    // console.log(letter);
    reverse=letter+reverse;
} 
console.log(reverse);

// type2 reverse(ignore right now)
let rev=""
for(let i=0;i<sentence.length;i++){
    console.log(i);
    console.log(sentence[i]);
    const letter=sentence[i];
    rev=letter+rev;
}
console.log(rev);


// type3   shortcut
const reversed=sentence.split('').reverse().join("");
console.log(reversed);

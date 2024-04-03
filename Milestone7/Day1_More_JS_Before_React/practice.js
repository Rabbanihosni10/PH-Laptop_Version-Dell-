/**
 * শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন কিভাবে লিখে। উদাহরণ হিসাবে তুমি এখন একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে।
*/
const foundNine=()=>{
    return 9;
}
console.log(foundNine())


/**
 * এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে।
*/
const multiplyTwelve=(newa)=>{
    return newa*12;
}

const newa=12;
const result=multiplyTwelve(newa);
console.log(result);


/**
 * দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।
 */
const doubleDhamal=(kopa,topa)=>{
    const noya=kopa+topa;
    return noya/4;
}
const kopa=12;
const topa=28;
const result2=doubleDhamal(kopa,topa);
console.log(result2);


/**
 * একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। 
 * সেটাতে দুইটা প্যারামিটার নিবে। 
 * ওই Arrow ফাংশনটা হবে অনেকগুলা লাইনের। 
 * সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে।
 * ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
 */
const telapoka=(total,dhamal)=>{
    const dhamalTotal=(total,dhamal)=>{
        const tia=totalDhamal(total,dhamal);
        return tia+((total+5)*(dhamal+5));
    }
    const totalDhamal=(total,dhamal)=>{
        const dha=(total+5)*(dhamal+5);
        return dha;
    }
    const tel=dhamalTotal(total,dhamal);
    return tel+((total+5)*(dhamal+5));
}
const total1=21;
const dhamal=21;
console.log(telapoka(total1,dhamal));
/**
 * সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য 
 * Destructuring ইউজ করো।
 * Array এর Destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে 
 * Destructuring করে 'Balance' নামক একটা ভেরিয়েবল এ রাখবে।
*/
function destructing1(arr){
    for(let val in arr){
        if(val==2){
            return arr[val];
        }
    }
}
const varDes1=destructing1([12,23,34,45]);
const obj1={address:'Bangsibagh',balance:12};
const obj2={};
const destructing2=(obj1)=>{
    for(let res in obj1){
        if (res==='balance'){
            return res;
        }
    }
}
obj2[destructing2(obj1)]=varDes1;
console.log(obj2);
/**
 * ফাংশন এর মধ্যে ডিফল্ট প্যারামিটার কিভাবে ডিক্লেয়ার করে
 */
const defaultPera=(a,b=5)=>{
    console.log(a+b);
}
defaultPera(5);
/**
 * অপশনাল চেইনিং কি জিনিস, সেটা কখন কিভাবে ইউজ করে ?
 */
const obj={a:1,
    b:{
        b1:2,c:3,d:4}};
console.log(obj.c?.b1);
console.log(obj.b?.c);

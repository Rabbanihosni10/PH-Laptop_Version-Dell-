const mobiles=[
    {name:"samsung",price:20000, camera:"80mp",color:"black"},
    {name:"Xiaomi",price:8000, camera:"24mp",color:"yellow"},
    {name:"Iphone",price:120000, camera:"120mp",color:"silver"},
    {name:"Nokia",price:2000, camera:"6mp",color:"blue"},
    {name:"Symphony",price:200, camera:"2mp",color:"red"},
]


function getCheapPhone(phones){
    let min=phones[0];
    for(const num of phones){
        if (num.price<min.price){
            min=num;
        }
    }
    return min;
}
const cheap=getCheapPhone(mobiles);
console.log("The cheapest phone among all the phones are:",cheap);


//now code to find out the pricy phone in this array







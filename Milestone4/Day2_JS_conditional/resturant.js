//Resturant Bills
const price=1200;
const age = 122;
if (age<=12){
    console.log('You can eat for free');
}
else if(age>=60){
    //50% Discount
    console.log("Total Price:",price);
    const discount= price * 50/100;
    console.log("Discounted Price:",discount);
    const payAmmount = price-discount;
    console.log("Payable Ammount:",payAmmount);
}

else{
    console.log(price);
}




// HW: Grading or a result sheet
// HW: BMI/BMR calculator

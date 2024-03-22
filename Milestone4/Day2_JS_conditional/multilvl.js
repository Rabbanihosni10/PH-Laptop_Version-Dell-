/**
 * Multilevel Condition
 */


const price = 3500;

if (price>=5000){
    // 10%discount
    const discount= price* 10/100;
    console.log("Discounted Price:",discount);
    const payAmmount = price-discount;
    console.log("Payable Ammount:",payAmmount);

}
else if(price>2500){
    //5% discount
    const discount =price*5/100;
    console.log("Discounted Price:",discount);
    const payAmmount = price-discount;
    console.log("Payable Ammount:",payAmmount);
}
else{
    console.log("Payable Ammount:",price)
}
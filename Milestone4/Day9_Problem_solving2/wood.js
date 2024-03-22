/**
 * chair --> 3 cft
 * table -->10 cft 
 * bed --> 50 cft
*/
function woodQuantity(chairQuan, tableQuan,bedQuan){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;

    const chairTotal=perChairWood*chairQuan;
    const tableTotal=perTableWood*tableQuan;
    const bedTotal=perBedWood*bedQuan;

    const totalWood=chairTotal+tableTotal+bedTotal;
    return totalWood;
}

const wood= woodQuantity(6,3,1);
console.log("Total Wood Needed:",wood);



/**
 * shirt Price --> 500
 * pant price --> 300
 * shoe price --> 900
 * What would be the total price of the purchase
 */
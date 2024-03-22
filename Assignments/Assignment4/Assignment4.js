function calculateMoney(ticketSale){
    if(ticketSale<0){
        return "error";
    }
    else{
        const maintainCost=500+(8*50);
        let income=ticketSale*120;
        let total=income-maintainCost;
        return total;
    }
}


function checkName(name){
    let arr=["a","y","i","e","o","u","w"]
    const len=name.length;
    if(typeof name ==="string"){
        const lastChar = name.charAt(len - 1).toLowerCase();
        if(arr.includes(lastChar)){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }
    else{
        return "invalid";
    }
    
}


function deleteInvalids(array) {
    let arr=[];
    let ar1=0;
    let ct=0;
    if (Array.isArray(array)){
        ar1+=1;
        for(const i of array){
            if(typeof i==="number" && !Number.isNaN(i)){
                arr[ct]=i;
                ct+=1
            }
            else{
                continue;
            }
        }
        if(ct===0){
            return [];
        }
        else{
            return arr;
        }
    }
    else{
        return "error message";
    }
}


function password(obj) {
    let password = "";
    for (const i in obj) {
        const len = obj[i].birthYear.length;
        if (len === 4) {
            let nam = i.sizeName[0].toUpperCase();
            password += nam;
            password += "#";
            password += i.name;
            password += "@";
            password += i.birthYear;
        } else {
            return "invalid";
        }
    }
    return password;
}

function monthlySavings(arr,livingCost){
    if((typeof arr==="string" || typeof arr==="number" || typeof arr==="boolean") || typeof livingCost!=="number"){
        return "invalid input";
    }
    else{
        let income=0;
        for(const i of arr){
          if(i<3000){
            income+=i;
          }
          else{
            income+=i-(i*(20/100));
          }
        }
        income=income-livingCost;
        if(income>=0){
            return income;
        }
        else{
            return "earn more";
        }
    } 
}


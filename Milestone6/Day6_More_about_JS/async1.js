const myLoader= () =>{
    return new Promise((resolve,reject)=>{
        const success =Math.random();
        if(success<0.5){
            resolve(success);
        }
        else{
            reject(success);
        }
    })
}
myLoader()
.then(data=>console.log('Resolved Data:',data))
.catch(err=>console.log('Rejected value:',err))

//Thats one approuch

// fetch('')
// .then(res=>res.json())             //if found data from fetch api then convert the data onto json
// .then(data=>console.log(data))     //if found success from promise then console its true
// .catch(err=>console.error(err))   //if found error from rpomise or not fullfilled


//Another approuch is
async function loadData(){
    const res=await fetch('');
    const data=await res.json();
    console.log(data);
}

const taskLoader= async ()=>{
    const res= await fetch('') 
}


// if we use function then we need use async then we dont need to use  '.then' we can simply use async at first then we can use await for further construction its available in fetch 
//else we can simply fetch and can use '.then'
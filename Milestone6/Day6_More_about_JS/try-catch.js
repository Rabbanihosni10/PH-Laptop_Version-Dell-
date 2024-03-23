function checkAge(){
    console.log('Button clicked!')
    const ageField= document.getElementById('age');
    const ageText=ageField.value;
    const errorTag=document.getElementById('error');
    try{
        // console.log(bBaria);  
        const age=parseInt(ageText);
        if(isNaN(age)){
            throw 'Please Enter a number'
            // console.log('Age not found',age,ageText);
        }  
        else if(age<18){
            throw 'bacha kacha not allowed';
        }
        else if(age>30){
            throw 'Murubbi ra aikhan e aisen na';
        }
        errorTag.innerHTML='';
    }
    catch(err){
        console.log('Error',err)
        errorTag.innerHTML='Error:'+err;
    }
    finally{
        console.log('All Done! Inside try catch')
    }
    console.log(11111111);
}
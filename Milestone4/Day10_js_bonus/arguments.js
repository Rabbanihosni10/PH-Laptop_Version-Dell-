function add(num1,num2){
    console.log(num1,num2);
    console.log(arguments);  //jotogulai perametter thakuk na kn sob gulai call korbe and it will create a array like object not a array
    console.log(arguments[4]);
}
add(12,13);
add(12,13,14,16);
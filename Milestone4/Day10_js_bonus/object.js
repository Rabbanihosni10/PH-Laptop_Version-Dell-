const student={
    name:"Sakib Khan",
    id:121,
    address:'movie cinema',
    isSingle:true,
    friends: ['Apu','Raaz','Salman','Amir'],
    movies:[{name:'no 1',year: 2015},{name: 'king amir',year:2026}],
    act: function(nayok){
        console.log("Acting line Sakib Khan!");
    },
    car: {
        brand:'tesla',
        price: 500000000,
        made:2025,
        menufecturer:{
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}
console.log(student);
console.log(student.student);
console.log(student.car);
console.log(student.car.menufecturer);
student.act();

const persons=['Akib','anis','Rakib','Nokib',"Lokib","Dakib"];
const sortedPersons=persons.sort();
console.log(sortedPersons);

//sort -->
const numbers=[4,12,38,1,7,2,8,3,6];
/**
 * Ascending-->  Samller to larger: [2,3,4,6,7,8]
 * Descending--> larger to smaller: [8,7,6,4,3,2]
*/

const numbers_asc=[...numbers].sort(function(a,b){return a-b})
const numbers_dsc=[...numbers].sort(function(a,b){return b-a})
console.log(numbers_asc);
console.log(numbers_dsc);
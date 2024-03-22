// const placeList=document.getElimentById('places-list');
// //2. what to be added
// const li=document.createElement('li');
// li.innerText='Pahartoli Bon';
// //3.add the child   
// placeList.appendChild(li);



//1.where to add
const mainContain= document.getElementById('main-contain');
const section=document.createElement('section');
//2.what to add
const h1=document.createElement('h1');
h1.innerText='My Food List';
section.appendChild(h1);
mainContain.appendChild(section);

const ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='biryani';
ul.appendChild(li1);
const li2=document.createElement('li');
li2.innerText='Polau';
ul.appendChild(li2);
const li3=document.createElement('li');
li3.innerText='Murgi';
ul.appendChild(li3);


section.appendChild(ul);
mainContain.appendChild(section);


//set innerHTML directly
const sectionDress=document.createElement('section')
 sectionDress.innerHTML=`
 <h1>My Dress</h1>
 <ul>
    <li>T-Shirt</li>
    <li>Lungi</li>
    <li>Sando Genji</li>
</ul>
`
mainContain.appendChild(sectionDress);
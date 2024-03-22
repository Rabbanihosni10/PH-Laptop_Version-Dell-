  const section=document.querySelectorAll('section');
  console.log(section);
  for(const sec of section){
    console.log(sec);
    sec.style.border='2px solid black'
    sec.style.marginBottom='5px';
    sec.style.borderRadius='14px';
    sec.style.paddingLeft='24px';
    sec.style.backgroundColor='lightgray';
    };
//   const placeContainer=document.getElementById('places-container');
//   placeContainer.style.backgroundColor='red';
//    add a class:
//var name.classList.add('class name')
// remove a class:
//var name.classList.remove('class name') 

  const placeContainer1=document.getElementById('places-container');
  placeContainer1.classList.add('yellow-bg')
  placeContainer1.classList.remove('large-text')
localStorage.setItem('UserID', 87952214);
const addToLocalStorage=()=>{
    const idInput=document.getElementById('storage_id');
    const valueInput=document.getElementById('storage_value');
    const id=idInput.value;
    const value=valueInput.value;
    //add to local storage
    // if (id && value){
    //     localStorage.setItem(id, value);
    // }
    (id && value) && localStorage.setItem(id, value);
    idInput.value='';
    valueInput.value='';
}
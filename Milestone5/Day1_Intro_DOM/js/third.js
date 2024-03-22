const mainDo=document.getElementById('main-container');
const section=document.createElement('section');
section.innerHTML=`
    <h1>my dynamic section</h1>
    <p>lorem2</p>
    <ul>
        <li>My dynamic</li>
        <li>My dynamic</li>
        <li>My dynamic</li>
        <li>My dynamic</li>
    </ul>
`
mainDo.appendChild(section);
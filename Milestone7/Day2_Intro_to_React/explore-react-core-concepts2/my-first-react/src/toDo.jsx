// export default function Todo({task,isDone}){
//     return (
//         <li>Task: {task}</li>
//     )
// }




// conditional rendaring (option 1)
// export default function Todo({task,isDone}){
//     if(isDone===true){
//         return (
//             <li>Task: {task}</li>
//         )
//     }
//     else{
//         return (
//             <li>Work on: {task}</li>
//         )
//     }
// }


//Conditional Rendaring (optional 2)
// export default function Todo({task,isDone}){
//     if(isDone){
//         return (
//             <li>Task: {task}</li>
//         )
//     }
//     return (
//         <li>Work on: {task}</li>
//     )
// }

//Conditional Rendaring 3  (ternary)

// export default function Todo({task,isDone}){
//     return (
//         <li>{isDone?'Finished':'Workon'}:{task}</li>
//     )
// }


//Conditional Rendaring 4
// export default function Todo({task,isDone}){
//     return (
//         <li>{task} {isDone && ":Done"}</li>
//     )
// }

//Conditional Rendaring 5
// export default function Todo({task,isDone}){
//     return (
//         <li>{task} {isDone || ":Do it"}</li>
//     )
// }


//Conditional Rendaring 6
export default function Todo({task,isDone}){
    let listItem;
    if(isDone){
        listItem=<li>Finish: {task}</li>
    }
    else{
        listItem=<li>Work on: {task}</li>
    }
    return listItem;
}
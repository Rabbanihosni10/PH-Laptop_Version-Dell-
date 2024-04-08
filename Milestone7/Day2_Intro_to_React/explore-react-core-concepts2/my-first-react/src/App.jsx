import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import'./App.css'
import Todo from './toDo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
export default function App() {
  const actors=['Sakib','Shoriful Raj','Jashim','Rubel','Salman Shah'];
  const singers=[
    {id:1,name:'Dr. Mahfuzur Rahman',age:68},
    {id:2,name:'Eva Rahman',age:38},
    {id:3,name:'Suvro Dev',age:58},
    {id:4,name:'Pritom',age:28}
  ]
  const books=[
    {id:1,name:'Physics',price:100},
    {id:2,name:'Biology',price:120},
    {id:3,name:'Chemistry',price:150},
    {id:4,name:'Math',price:300},
    {id:1,name:'Physics',price:100},
  ]
  return (
    <>
      <h1 className='student'>Vite + React</h1>
      {
        singers.map(singer=><Singer singer={singer}></Singer>)
      }
      <Actor name={"Bappa Raz"}></Actor>
      <BookStore book={books}></BookStore>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }

      {/* <Todo 
      task="Learn React"
      isDone={true}>
      </Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade={12} score='85'></Student>
      <Student></Student>
      <Developer></Developer>       */}
    </>
  )
}
function Device(props){
  console.log(props);
  return (
    <h2>This Device:{props.name} price: {props.price}</h2>
  )
}
function Person(){
  const age=25;
  const money=25;
  const person={name:'Sakib',age:12};
  return ( 
  <h3>I am a Person!
    with age: {age}
    I am {person.name} age {person.age}
    money {money+age}
  </h3>
  )
}
const {grade,score}={grade:'7',score:'99'};
const Student=({grade=1,score=0})=>{
  console.log(grade,score)
  return <div className='student'>
    <h3>This is a Student!</h3>
    <p>Name:Sania</p>
    <p>Age:24</p>  
    <p>Class: {grade}</p>  
    <p>score: {score}</p>  
  </div>
}
const Developer=()=>{
  const devoStyle={
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={devoStyle}>
      <h5>Devo Davo</h5>
      <p>Coding:</p>
    </div>
  )
}

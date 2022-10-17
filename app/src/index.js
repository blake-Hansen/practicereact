import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Buttonz from './Buttons/Button.js'
import {useState} from 'react'


const books = [
{
  img:"https://www.nbcsports.com/sites/nbcsports.com/files/styles/more_top_stories_small/public/2022/10/16/gettyimages-1433863816-e1665947641404.jpg?itok=d7AeVB5E&timestamp=1665948364",
  title:"Football",
  author: "Van Dijk"
},
{
  img:"https://m.media-amazon.com/images/I/51XSnDfDL2L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title:"Wise Men Christmas",
  author: "James Wiseman"
},
{
  img:"https://ichef.bbci.co.uk/live-experience/cps/480/cpsprodpb/1FF1/production/_127177180_liverpoolgoal.jpg",
  title:"Liverpool",
  author: "Robert Sallah"
}
];




function BookList() {
  return (
    <section className="temp">  
        {books.map( (book) => {
         
          return <Book key={Math.random()} {...book}></Book>
        })}
      </section>
  )
}

const Book = ({img, title, author}) => {
  const [size, setSize] = useState(30);
  
  
  const bigHandler = () => {
    setSize(size + 5)
  }

  const smallHandler = () => {
    setSize(size - 5)
  }

    const clickHandler = (e) => {
      console.log(e.target.value)
      alert("Hello")
    }

    const complexHandler = (author) => {
        console.log(author)
    }
  return (
    <article className="card" onMouseOver={()=> console.log("over")}>
      <h1 onClick={()=> console.log(title)}style={{fontSize:`${size}px`}}>{title}</h1>
      <p>{author.toUpperCase()}</p>
      <button type="button" onClick={clickHandler}>ALERT</button>
      <button type="button" onClick={() => complexHandler(author)}>COMPLEX</button>
      <img 
      src={img}
      alt="men"
       />
       <Buttonz addHandler={bigHandler} minusHandler={smallHandler}/>
    </article>
  )
};


ReactDOM.render(<BookList />,document.getElementById('root') )



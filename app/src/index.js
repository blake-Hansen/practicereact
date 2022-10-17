import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Buttonz from './Buttons/Button.js'
import {useState} from 'react'


const books = [
{
  img:"https://www.nbcsports.com/sites/nbcsports.com/files/styles/more_top_stories_small/public/2022/10/16/gettyimages-1433863816-e1665947641404.jpg?itok=d7AeVB5E&timestamp=1665948364",
  title:"Football",
  author: "NBC"
},
{
  img:"https://m.media-amazon.com/images/I/51XSnDfDL2L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title:"Wise Men Christmas",
  author: "James Wiseman"
}
];




function BookList() {
  
  return (
    <section className="temp">
        
        {books.map( (book) => {
          const {img, title, author} = book;
          return <Book book={book}></Book>
        })}
      </section>
  )
}

const Book = (props) => {
  const [size, setSize] = useState(10);
  const {img, title, author} = props.book;
  
  
  
  const bigHandler = () => {
    setSize(size + 5)
  }

  const smallHandler = () => {
    setSize(size - 5)
  }

  return (
    <article className="card">
      <h1 style={{fontSize:`${size}px`}}>{title}</h1>
      <p>{author.toUpperCase()}</p>
     
      <img 
      src={img}
      alt="men"
       />
       <Buttonz addHandler={bigHandler} minusHandler={smallHandler}/>
    </article>
  )
};


ReactDOM.render(<BookList />,document.getElementById('root') )



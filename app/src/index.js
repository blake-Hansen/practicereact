import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Buttonz from './Buttons/Button.js'
import {useState} from 'react'

const firstBook = {
  img:"https://www.nbcsports.com/sites/nbcsports.com/files/styles/more_top_stories_small/public/2022/10/16/gettyimages-1433863816-e1665947641404.jpg?itok=d7AeVB5E&timestamp=1665948364",
  title:"Football",
  author: "NBC"
}

const secondBook = {
  img:"https://m.media-amazon.com/images/I/51XSnDfDL2L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title:"Wise Men Christmas",
  author: "James Wiseman"
}
// const title = "Wise Men Christmas";
// const author = "James Wiseman"
// const img = "https://m.media-amazon.com/images/I/51XSnDfDL2L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"


function BookList() {
  const [size, setSize] = useState(10);
  
  return (
      <section>
        <Book title={firstBook.title} author={firstBook.author} img={firstBook.img} job='developer'>
         <p>Lorem Ipsom</p>
          </Book>
        <Book title={secondBook.title} author={secondBook.author} img={secondBook.img} />       
      </section>
  )
}



const Book = ({img, author, title, children}) => {
  // const {img, title, author} = props;
  return (
    <article className="card">
      <h1>{title}</h1>
      <p>{author.toUpperCase()}</p>
      {children}
      <img 
      src={img}
      alt="men"
       />
       <Buttonz />
    </article>
  )
};


ReactDOM.render(<BookList />,document.getElementById('root') )



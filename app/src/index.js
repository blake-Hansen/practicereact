import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


import Book from './Book.js'
import { books } from './books.js'




function BookList() {
  
  return (
    <section className="temp">  
        {books.map( (book) => {         
          return <Book key={books.keys} {...book}></Book>
        })}
        
      </section>
  )
}




ReactDOM.render(<BookList />,document.getElementById('root') )



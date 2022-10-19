import Buttonz from './Buttons/Button.js'
import {useState} from 'react'



const Book = ({img, title, author}) => {
 
    const [size, setSize] = useState(30);
    const [titleColor, setTitleColor] = useState("black");
    
    
    const bigHandler = () => {
      setSize(size + 5)
    }
  
    const smallHandler = () => {
      setSize(size - 5)
    }

    

    return (
      <article className="card" >
        <h1 onMouseOver={()=> setTitleColor("blue")} onClick={()=> console.log(title)}style={{fontSize:`${size}px`, color:`${titleColor}`}}>{title}</h1>
        <p>{author.toUpperCase()}</p>
        <img 
        src={img}
        alt="men"
         />
         <Buttonz addHandler={bigHandler} minusHandler={smallHandler}/>
        
      </article>
    )
  };
  

  export default Book
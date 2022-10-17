import './Button.css'


const Buttons = (props) => {

    return (
        <div className="Buttons" >
            <button onClick={props.minusHandler} className="butt">SMALL</button>
            <button onClick={props.addHandler} className="butt" >BIG</button>
        </div>
    )
}



export default Buttons
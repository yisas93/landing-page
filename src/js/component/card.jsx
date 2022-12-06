import React from "react"



const Card = (props) =>{
  /*
  img
  title
  text

  */
 return(
    <div className="card" >
  <img src={Card.img}className="card-img-top"  alt={Card.alt}/>
  <div className="card-body">
    <h5 className="card-title">{Card.title}</h5>
    <p className="card-text">{Card.text}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 )
    
}


export default Card
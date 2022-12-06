import React from "react"
import Card from "./card.jsx"



const Cards = ()=>{
    return (
    
    <Card>
        {Card.img="https://picsum.photos/200/200?random=10"}
        {Card.text="Simple pic, nothing to write home about"}
        {Card.title="Just a pic"}

    </Card>
  
    )
}
export const Card2= ()=>{
    return(
    <Card>
        {Card.img="https://picsum.photos/200/200?random=13"}
        {Card.text="The universe expressed to itself as a pic"}
        {Card.title="Amazingness"}
    </Card>
    )
}
export const Card3=()=>{
    return <Card>
        {Card.img="https://picsum.photos/200/200?random=12"}
        {Card.text="Try to caption this pic, you'll fail"}
        {Card.title="Great Pic"}
       
    </Card>
}
export const Card4=()=>{
    return <Card>
    {Card.img="https://picsum.photos/200/200?random=11"}
    {Card.text="This really is something, right?"}
    {Card.title="Awesome pic"}
   
</Card>

}

export default Cards

import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";


const Cards = ({listId}) => {
  const { cards } = useSelector(state =>  state)
  const filteredCards = cards.filter(card => card.listId === listId)
  const cardComponents = filteredCards.map(card => <Card key={card._id} card={card}/>)  
  return (
    <div id="cards-container" data-id="list-2-cards">
      {cardComponents}
    </div>
  )
}

export default Cards;
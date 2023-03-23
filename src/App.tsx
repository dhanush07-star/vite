import React from 'react'
import Message from './Message'
import ListGroup from './ListGroup'




export default function App() {
    let cities = ["New York", "London", "Delhi", "Paris", "Tokyo"];
  return (
    <div>
      <Message/>
      <ListGroup cities={cities} heading={'Cities'}/>
    </div>
  )
}

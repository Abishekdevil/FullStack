import React from 'react'
import TestimonalCard from './component/testimonalCard'

function App() {
  const cards=[
    {
      Name: "Gwen",
      Review : "Good work"
    },
    {
      Name: "Peter",
      Review : "nice service"
    },
  ]
  return (
    <div>
      <div>
      {cards.map((i,index)=>
        <TestimonalCard key={index} CustomerName={i.Name} Review={i.Review} />
      )}
      </div>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'
import axios from './axios';

function TinderCards() {

  // const [people , setPeople] = useState([
  //   {
  //     name: "Elon Musk",
  //     url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
  //   },
  //   {
  //     name: "Jef Bezoz",
  //     url: "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg"
  //   }
  // ]);
  const [people , setPeople] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('/tinder/cards')

      setPeople(req.data)
    }

    fetchData()
  }, [])

  const swiped = (dir , nameToDelete) => {
    console.log("removing: " , nameToDelete)
  }

  const outOfFrame = (name) => {

  }

  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
      {people.map((person) => (
        <TinderCard
         className='swipe'
         key={person.name}
         preventSwipe={['up' , 'down']}
         onSwipe={(dir) => swiped(dir, person.name)}
         onCardLeftScreen={() => outOfFrame(person.name)}
        >
          <div
            style={{backgroundImage: `url(${person.imgUrl})`}}
            className='card'
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
      </div>
    </div>
  )
}

export default TinderCards
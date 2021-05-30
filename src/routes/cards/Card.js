import React, { useEffect, useState } from 'react';
import KanjiCards from '../../components/KanjiCard';

const Card = () => {
  const[kanji, setKanji] = useState([])

  const getAllKanji = async () => {
    const res = await fetch('https://kanjiapi.dev/v1/kanji/all')
    const data = await res.json()

    function createKanjiObject(results)  {
      results.forEach( async cha => {
        const res = await fetch(`https://kanjiapi.dev/v1/kanji/${cha}`)
        const data =  await res.json()
        setKanji( currentList => [...currentList, data])
      })
    }
    createKanjiObject(data)
  }

 useEffect(() => {
  getAllKanji()
 }, [])

  return (
    <div className="app-contaner">
      <h1>Kanji Cards</h1>
      <div className="pokemon-container">
        <div className="all-container">
        {kanji.map((kan) => 
            <KanjiCards
            kanji={kan.kanji}
            meaning = {kan.meanings[0]}
          />)}
          
        </div>
      </div>
    </div>
  );
}

export default Card;








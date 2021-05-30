import React from 'react'

const KanjiCard = ({kanji, meaning, }) => {
    const style = kanji + " thumb-container";
    return (
        <div className={style}>
            <div className="detail-wrapper">
                <h3>{kanji}</h3>
                <small>Meaning: {meaning}</small>
            </div>
        </div>
    )
}

export default KanjiCard

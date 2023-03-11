import React from 'react'
import Button from './Button'

const Cardphrases = ({ handleClickChange, contentArray }) => {
    return (
        <div><h1>Cardphrases</h1> <p>{contentArray.phrase} </p>
            <p><i> Author: {contentArray.author}</i></p> 
            <div><Button
                handleClickChange={handleClickChange} /></div>
        </div>
    )
}

export default Cardphrases

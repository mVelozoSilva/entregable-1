import { useState } from 'react'
import './App.css'
import Cardphrases from './components/Cardphrases'
import Phrases from "./assets/json/espacio.json"

function App() {

  //Array de estilos para el fondo//

  const backgroundPictures = ["nebulosa-azul", "nebulosa-negra", "nebuloza-aquamarino", "nebulosa-morada"]
      
    
  //Fórmula para crear N° random de un arreglo//

  const createNR = Array => {
    return Math.floor(Math.random()*Array.length)
  }

  //Creación del N° Ramdom del arreglo//

  let bkgNR = createNR(backgroundPictures)

  let phraseRandom = createNR(Phrases)


  // Usestate que contiene la información//

  const [contentArray, setContentArray] = useState(Phrases[phraseRandom])
  const [backP, setBackP] = useState(backgroundPictures[bkgNR])
  
  // Funcionalidad del botón//

  const handleClickChange = ()=> {

    bkgNR = createNR(backgroundPictures)
    phraseRandom = createNR(Phrases)
    setContentArray(Phrases[phraseRandom])
    setBackP(backgroundPictures[bkgNR])
  }
 console.log(contentArray)
  return (
    <div className= {`App backgd ${backP}`}>
     <Cardphrases
     handleClickChange = {handleClickChange}
     contentArray = {contentArray}
     />
    </div>
  )
}

export default App

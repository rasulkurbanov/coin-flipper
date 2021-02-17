import React, { useState, Fragment } from "react";
import { randomEl } from '../utils/helper'
import Coin from '../Coin/Coin'

function CoinContainer() {
  const coins = [
    {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
    {side: 'tails', imgSrc: 'https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png'}
  ]

  const defProps = {
    currentCoin: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0
  }
  
  const [state, setState1] = useState(defProps)

  function flipCoin() {
    const newCoin = randomEl(coins)

    setState1({
      currentCoin: newCoin,
      nFlips: state.nFlips + 1,
      nHeads: state.nHeads + ( newCoin.side === 'heads' ? 1 : 0 ),
      nTails: state.nTails + ( newCoin.side === 'tails' ? 1 : 0),
    })
  }

  function btnHandler(e) {
    flipCoin()
  }

  
  return <Fragment>
    
    {
    state.currentCoin 
    ?
    <Coin imgSrc={state.currentCoin ? state.currentCoin.imgSrc : ''} alt={state.currentCoin.side}/>
    :
    null
    }


    <h1>Из {state.nFlips} бросков выпало {state.nHeads} орлов и {state.nTails} решек</h1>

  <button onClick={btnHandler}>Flip the coin</button>

  </Fragment>
}


export default CoinContainer
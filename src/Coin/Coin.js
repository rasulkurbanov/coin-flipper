import  "./Coin.css";

function Coin(props) {
  return (
    <div className="Coin">
      <img className="CoinImg" src={props.imgSrc} alt={props.side}/>
    </div>
  )
}


export default Coin
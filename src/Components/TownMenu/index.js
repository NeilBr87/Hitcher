import { useState, useEffect } from 'react';
import './style.css';
import EveningMenu from '../EveningMenu';
import ExploreMenu from '../ExploreMenu';

const townPotentials = {
  London: ['Crawley', 'Maidstone', 'Winchester'],
  Dover: ['Calais'],
  Calais: ['Lille', 'Amiens', 'Roen', 'Brussels'],
  Lille: ['Paris', 'Amiens', 'Brussels'],
  Amiens: ['Paris', 'Orleans', 'Reims'],
  Roen: ['Paris', 'Orleans', 'Reims'],
  Folkestone: ['Calais',],
  Crawley: ['Newhaven', 'Folkestone'],
  Maidstone: ['Dover', 'Folkestone'],
  Winchester: ['Portsmouth', 'Newhaven', 'Dieppe'],
  Portsmouth: ['Caen'],
  Newhaven: ['Dieppe'],
  Paris: ['Orleans', 'Reims', 'Bordeaux', 'Barcelona'],
  Orleans: ['Toulouse', 'Bordeaux'],
  Reims: ['Dijon', 'Strasbourg'],
  Brussels: ['Antwerp', 'Cologne', 'Frankfurt'],
  Antwerp: ['Amsterdam', 'Cologne'],
  Frankfurt: ['Munich', 'Prague', 'Vienna'],
  Barcelona: ['Valencia', 'Alicante', 'Malaga'],
  Bordeaux: ['Toulouse', 'Montpellier', 'Barcelona'],
  Toulouse: ['Montpellier', 'Barcelona', 'Valencia'],
  Valencia: ['Alicante', 'Malaga'],
  Malaga: ['Granada', 'Almeria'],
  Istanbul: ['Ankara', 'Thessaloniki', 'Sofia', 'Bucharest', 'Kiev', 'Moscow'],
  Moscow: ['Kiev', 'Minsk'],
  Minsk: ['Vilnius', 'Riga', 'Tallinn', 'Moscow'],
  Sofia: ['Thessaloniki', 'Istanbul', 'Bucharest', 'Belgrade'],
  Bucharest: ['Belgrade', 'Sofia', 'Istanbul', 'Kiev'],
  Kiev: ['Minsk', 'Moscow', 'Chisinau'],
  Thessaloniki: ['Sofia', 'Istanbul', 'Athens'],
  Athens: ['Thessaloniki'],
  Tallinn: ['Riga', 'Helsinki'],
  Riga: ['Vilnius', 'Tallinn'],
  Vilnius: ['Riga', 'Warsaw'],
  Warsaw: ['Berlin', 'Prague'],
  Prague: ['Berlin', 'Munich', 'Vienna'],
  Vienna: ['Munich', 'Budapest'],
  Budapest: ['Belgrade', 'Vienna'],
  Belgrade: ['Sarajevo', 'Bucharest', 'Budapest'],
  Sarajevo: ['Belgrade', 'Podgorica', 'Tirana'],
  Podgorica: ['Tirana', 'Prishtina'],
  Prishtina: ['Skopje', 'Tirana'],
  Tirana: ['Skopje', 'Thessaloniki', 'Podgorica'],
  Skopje: ['Sofia', 'Tirana'],
  Berlin: ['Hamburg', 'Copenhagen', 'Warsaw'],
  Hamburg: ['Copenhagen', 'Amsterdam'],
  Amsterdam: ['Cologne', 'Brussels'],
  Copenhagen: ['Oslo', 'Stockholm'],
  Oslo: ['Stockholm', 'Helsinki'],
  Stockholm: ['Helsinki'],
  Helsinki: ['St. Petersburg'],
  StPetersburg: ['Moscow'],
};

export default function TownMenu(props) {
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState(0);
  const [deciding, setDeciding] = useState(false);
  const [newTown, setNewTown] = useState('');
  const [evening, setEvening] = useState(false);
  const [sleepStatus, setSleepStatus] = useState("Sleeping rough");
  const [eatingStatus, setEatingStatus] = useState("Going hungry");
  const [eveningBlurb, setEveningBlurb] = useState(true);
  const [exploring, setExploring] = useState(false);

  const getRandomAmount = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  useEffect(() => {
    if (newTown !== '') {
      const isAskingForMoney = Math.random() < 0.4;

      if (isAskingForMoney) {
        const randomAmount = getRandomAmount(10, 40);
        setAmount(randomAmount);
        setMessage(
          `A driver pulls up. He says, "I'm going to ${newTown}. Do you want a lift? I'll need £${randomAmount} for petrol."`
        );
      } else {
        setAmount(0);
        setMessage(
          `A driver pulls up. He says, "I'm going to ${newTown}. Do you want a lift? It's free."`
        );
      }
    }
  }, [newTown]);

  useEffect(() => {
    if (props.time >= 17) {
      setEvening(true);
    }
  }, [props.time]);

  function handleExploreClick() {
    setExploring(true);
  }


  function hitchhike() {
    props.setTime(props.time + 2);
    setDeciding(true);
    const randomIndex = Math.floor(Math.random() * townPotentials[props.currentTown].length);
    setNewTown(townPotentials[props.currentTown][randomIndex]);
  }

  function accept() {
    props.setCurrentTown(newTown);
    if (amount > 0) {
      props.setMoney(props.money - amount);
    }
    setAmount(0);
    setDeciding(!deciding);
  }

  function decline() {
    setDeciding(!deciding);
  }

  return (

    <div id="containerFade" style={{display: 'flex', flexDirection: 'row', width: '700px', height: '500px',justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'white', color: 'black', borderRadius: '20px'}}>
      
      
      
      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px'}}>
        <h2>Day {props.day}</h2>
        {!evening && <h3 style={{marginTop: '-2px'}}>{props.time}:00</h3>}
        <p style={{marginTop: '-2px'}}>You are in {props.currentTown}.</p>   
        {!evening && (
        <div>     
        {!deciding && !exploring && (
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '30px'}}>
            <button className="keyButtons" onClick={hitchhike}>Hitchhike</button>
            <button className="keyButtons" onClick={handleExploreClick}>Explore</button>
            </div>

            )}
            {exploring && (
              <div>
                <ExploreMenu setExploring={setExploring} currentTown={props.currentTown} setCurrentTown={props.setCurrentTown} health={props.health} setHealth={props.setHealth} food={props.food} setFood={props.setFood} money={props.money} setMoney={props.setMoney} />
              </div>)}
        
        {deciding && (
          <div>
            <p>You spend a couple of hours with your thumb in the air.</p>
            <p style={{width: '600px'}}>{message}</p>
            <p>Do you agree?</p>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
            <button style={{
                border: '5px inset rgb(60, 160, 60)',
                backgroundColor: 'rgb(100, 200, 100)',
                fontFamily: 'courier, monospace',
                width: '70px',
                height: '40px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '5px'
            }}
            onClick={accept}>Yes</button>
            <button style={{
                border: '5px inset rgb(160, 60, 60)',
                backgroundColor: 'rgb(200, 100, 100)',
                fontFamily: 'courier, monospace',
                width: '70px',
                height: '40px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '5px'
            }}onClick={decline}>No</button>
            </div>
          </div>
        )}
      </div>)}
      {evening && (
        <div>
          {eveningBlurb && (
            <div>
              <p>You stick your thumb out for a while but no one is in a generous mood.</p>
              <p>It's early evening now - too late to hitch a ride.</p>
            </div>)}
          <EveningMenu setEveningBlurb={setEveningBlurb} setDeciding={setDeciding} day={props.day} setDay={props.setDay} time={props.time} setTime={props.setTime} sleepStatus={sleepStatus} setSleepStatus={setSleepStatus} eatingStatus={eatingStatus} setEatingStatus={setEatingStatus} setEvening={setEvening} health={props.health} setHealth={props.setHealth} food={props.food} setFood={props.setFood} money={props.money} setMoney={props.setMoney}/>
      </div>
      )}
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import './style.css';
import Notes from './Notes.JPG';

const townPotentials = {
  London: ['Crawley', 'Maidstone', 'Winchester', 'Paris'],
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


  function hitchhike() {
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

    <div style={{display: 'flex', flexDirection: 'row', width: '600px', height: '400px',justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '20px'}}>
      
      
      
      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px'}}>
        <h2>Menu</h2>
        <p>You are in {props.currentTown}.</p>        
        {!deciding && (
          <div>
            <button onClick={hitchhike}>Hitchhike</button>
          </div>
        )}
        {deciding && (
          <div>
            <p>{message}</p>
            <p>Do you agree?</p>
            <button onClick={accept}>Yes</button>
            <button onClick={decline}>No</button>
          </div>
        )}
      </div>

    </div>
  );
}
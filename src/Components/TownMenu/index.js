import { useState, useEffect } from 'react';
import './style.css';
import EveningMenu from '../EveningMenu';
import ExploreMenu from '../ExploreMenu';
import TravelMenu from '../TravelMenu';

const townPotentials = {
  London: ['Crawley', 'Maidstone', 'Winchester'],
  Dover: ['Calais'],
  Calais: ['Lille', 'Amiens', 'Roen', 'Brussels'],
  Lille: ['Paris', 'Amiens', 'Brussels'],
  Amiens: ['Paris', 'Orleans', 'Reims'],
  Roen: ['Paris', 'Orleans', 'Reims'],
  Folkestone: ['Calais',],
  Crawley: ['Newhaven', 'Folkestone', 'Dover', 'Portsmouth'],
  Maidstone: ['Dover', 'Folkestone', 'Newhaven'],
  Winchester: ['Portsmouth', 'Newhaven'],
  Dieppe: ['Paris', 'Orleans', 'Reims'],
  Portsmouth: ['Caen'],
  Caen: ['Paris', 'Tours', 'Orleans'],
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
  // Render control panel
  
   // Once this is set to true, close out day and open evening menu
  const [evening, setEvening] = useState(false);
  // Opens the 'deciding' menu which is where you can say yes or no to a lift
  const [deciding, setDeciding] = useState(false);
  // Renders the 'evening blurb' - the text to explain the hitchhiking cutoff before evening. Note: The thumb needs to be moved somewhere in case user isn't hitchhiking when evening starts.
  const [eveningBlurb, setEveningBlurb] = useState(true);
  // Renders the town menu (earn, lunch, hospital, parcelSprint)
  const [exploring, setExploring] = useState(false);
  // Renders the travelling menu on accepting a lift
  const [travelling, setTravelling] = useState(false);

  
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState(0);
  const [newTown, setNewTown] = useState('');
  const [sleepStatus, setSleepStatus] = useState("Sleeping rough");
  const [eatingStatus, setEatingStatus] = useState("Going hungry");

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
    if (props.time >= 17.05) {
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
    setTravelling(true);
  }

  function decline() {
    setDeciding(!deciding);
  }

  return (

    <div id="containerFade" style={{display: 'flex', flexDirection: 'row', width: '700px', height: '500px',justifyContent: 'center', alignItems: 'flex-start', backgroundColor: evening? 'rgb(150, 150, 150)' : 'white', color: 'black', borderRadius: '20px'}}>
      
      
      
      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px'}}>
        <h2>Day {props.day}</h2>
        {!evening && <h3 style={{marginTop: '-2px'}}>{props.time}:00</h3>}
        {!travelling && <p style={{marginTop: '-2px'}}>You are in {props.currentTown}.</p>}   
        {!evening && (
        <div>     
        {!deciding && !exploring && !travelling && (
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '30px'}}>
            <button className="keyButtons" onClick={hitchhike}>Hitchhike</button>
            <button className="keyButtons" onClick={handleExploreClick}>Explore</button>
            <button className="keyButtons">Wait</button>
            </div>

            )}
            {exploring && (
              <div>
                <ExploreMenu setTravelling={setTravelling} setExploring={setExploring} currentTown={props.currentTown} setCurrentTown={props.setCurrentTown} health={props.health} setHealth={props.setHealth} food={props.food} setFood={props.setFood} money={props.money} setMoney={props.setMoney} time={props.time} setTime={props.setTime} />
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
            }} onClick={decline}>No</button>
            </div>
          </div>
        )}

        {travelling && (
          <div>
            <TravelMenu setTime={props.setTime} time={props.time} setTravelling={setTravelling} currentTown={props.currentTown}/>
          </div>
        )}

      </div>)}
      {evening && (
        <div>
          {eveningBlurb && (
            <div>
              <p>You run out of time - it's getting late.</p>
              <p>It's early evening now - too late to hitch a ride or explore town.</p>
            </div>)}
          <EveningMenu setEveningBlurb={setEveningBlurb} setDeciding={setDeciding} day={props.day} setDay={props.setDay} time={props.time} setTime={props.setTime} sleepStatus={sleepStatus} setSleepStatus={setSleepStatus} eatingStatus={eatingStatus} setEatingStatus={setEatingStatus} setEvening={setEvening} health={props.health} setHealth={props.setHealth} food={props.food} setFood={props.setFood} money={props.money} setMoney={props.setMoney}/>
      </div>
      )}
      </div>
    </div>
  );
}
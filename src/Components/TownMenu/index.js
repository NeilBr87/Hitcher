import { useState, useEffect } from 'react';
import './style.css';
import EveningMenu from '../EveningMenu';
import ExploreMenu from '../ExploreMenu';
import TravelMenu from '../TravelMenu';

const townPotentials = {
  // UK - done
  London: ['Crawley', 'Maidstone', 'Winchester'], // Status: Accurate
  Crawley: ['Newhaven', 'Folkestone', 'Dover', 'Portsmouth'], // Status: Accurate
  Maidstone: ['Dover', 'Folkestone', 'Newhaven'], // Status: Accurate
  Winchester: ['Portsmouth', 'Newhaven'], // Status: Accurate
  Newhaven: ['Dieppe'], // Status: Accurate
  Dover: ['Calais'], // Status: Accurate
  Folkestone: ['Calais',], // Status: Accurate
  Portsmouth: ['Caen'], // Status: Accurate

  // France - done
  // North
  Calais: ['Lille', 'Amiens', 'Brussels'], // Status: Accurate
  Lille: ['Paris', 'Reims', 'Brussels'], // Status: Accurate
  Amiens: ['Paris', 'Orleans', 'Reims'], // Status: Accurate
  Dieppe: ['Paris', 'Orleans', 'Reims'], // Status: Accurate
  Caen: ['Paris', 'Tours', 'Orleans'], // Status: Accurate
  Paris: ['Orleans', 'Tours', 'Reims', 'Dijon'], // Status: Accurate
  Tours: ['Bordeaux'], // Status: Accurate
  Dijon: ['Bern', 'Geneva', 'Lyon'], // Status: Accurate
  Orleans: ['Tours', 'Dijon', 'Lyon'], // Status: Accurate
  Reims: ['Luxembourg', 'Saarbrücken'], // Status: Accurate
  // South
  Lyon: ['Marseille', 'Nice', 'Geneva', 'Turin'], // Status: Accurate
  Bordeaux: ['Toulouse', 'Bilbao'], // Status: Accurate
  Toulouse: ['Andorra'], // Status: Accurate
  Marseille: ['Nice'], // Status: Accurate
  Nice: ['Genoa', 'Turin'], // Status: Accurate

  //Andorra - done
  Andorra: ['Zaragoza', 'Barcelona'], // Status: Accurate

  //Belgium - done
  Brussels: ['Antwerp', 'Dusseldorf', 'Cologne'], // Status: Accurate
  Antwerp: ['Amsterdam', 'Duisburg'], // Status: Accurate

  // Germany - done
  // North
  Berlin: ['Szczecin', 'Poznań', 'Dresden'], // Status: Accurate
  Hamburg: ['Flensburg', 'Berlin'], // Status: Accurate
  Dusseldorf: ['Frankfurt', 'Hanover'], // Status: Accurate
  Cologne: ['Frankfurt', 'Stuttgart'], // Status: Accurate
  Duisburg: ['Bremen', 'Hanover'], // Status: Accurate
  Hanover: ['Hamburg', 'Berlin', 'Leipzig'], // Status: Accurate
  Leipzig: ['Dresden', 'Prague'], // Status: Accurate
  Dresden: ['Prague', 'Wrocław'], // Status: Accurate
  Bremen: ['Hamburg', 'Flensburg'], // Status: Accurate
  Flensburg: ['Copenhagen'], // Status: Accurate
  // South
  Frankfurt: ['Nuremburg ', 'Stuttgart', 'Munich'], // Status: Accurate
  Munich: ['Innsbruck', 'Salzburg'], // Status: Accurate
  Stuttgart: ['Munich', 'Nuremberg, Vaduz'], // Status: Accurate
  Nuremberg: ['Munich', 'Prague'], // Status: Accurate
  
  // Denmark - done
  Copenhagen: ['Jönköping', 'Stockholm'], // Status: Accurate

  // Sweden - done
  Jönköping: ['Stockholm'], // Status: Accurate
  Stockholm: ['Turku'], // Status: Accurate

  // Finland - done
  Turku: ['Helsinki'], // Status: Accurate
  Helsinki: ['St Petersburg'], // Status: Accurate

  Barcelona: ['Valencia', 'Alicante', 'Malaga'],
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
  
  Amsterdam: ['Cologne', 'Brussels'],
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

    <div>

    <div id="containerFade" style={{display: 'flex', flexDirection: 'row', width: '700px', height: '500px',justifyContent: 'center', alignItems: 'flex-start', backgroundColor: evening? 'rgb(150, 150, 150)' : 'white', color: 'black'}}>
      

      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>

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
            <TravelMenu setActualTown={props.setActualTown} setTime={props.setTime} time={props.time} setTravelling={setTravelling} currentTown={props.currentTown} health={props.health} food={props.food} setHealth={props.setHealth} setFood={props.setFood} />
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
    
    </div>
  );
}
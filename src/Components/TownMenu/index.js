import { useState, useEffect } from 'react';
import './style.css';
import EveningMenu from '../EveningMenu';
import ExploreMenu from '../ExploreMenu';
import TravelMenu from '../TravelMenu';
import WalkMenu from '../WalkMenu';
import UseMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
  Reims: ['Luxembourg'], // Status: Accurate
  // South
  Lyon: ['Marseille', 'Nice', 'Geneva', 'Turin'], // Status: Accurate
  Bordeaux: ['Toulouse', 'Bilbao'], // Status: Accurate
  Toulouse: ['Andorra'], // Status: Accurate
  Marseille: ['Nice'], // Status: Accurate
  Nice: ['Genoa', 'Turin'], // Status: Accurate

  // **NORTHERN ROUTE - TOWARDS RUSSIA**

  //Belgium - done
  Brussels: ['Antwerp', 'Dusseldorf', 'Cologne'], // Status: Accurate
  Antwerp: ['Amsterdam', 'Duisburg'], // Status: Accurate

  //Netherlands - done
  Amsterdam: ['Dusseldorf', 'Duisburg', 'Bremen'], // Status: Accurate

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
  Helsinki: ['Petersburg'], // Status: Accurate

  // Poland -  done
  Szczecin: ['Piła', 'Koszalin', 'Poznań'], // Status: Accurate
  Poznań: ['Łódź', 'Wrocław'], // Status: Accurate
  Wrocław: ['Krakow', 'Częstochowa', 'Ostrava'], // Status: Accurate
  Częstochowa: ['Krakow', 'Warsaw'], // Status: Accurate
  Warsaw: ['Białystok', 'Brest'], // Status: Accurate
  Białystok: ['Baranavichy', 'Brest'], // Status: Accurate
  Krakow: ['Košice', 'Warsaw'], // Status: Accurate
  Łódź: ['Warsaw', 'Krakow'], // Status: Accurate
  Koszalin: ['Gdansk'], // Status: Accurate
  Gdansk: ['Kaliningrad'], // Status: Accurate

  // Russia (Baltic coast) - done
  Kaliningrad: ['Klaipėda', 'Kaunas'], // Status: Accurate

  // Lithuania - done
  Klaipėda: ['Liepāja', 'Šiauliai'], // Status: Accurate
  Kaunas: ['Vilnius'], // Status: Accurate
  Šiauliai: ['Riga'], // Status: Accurate
  Vilnius: ['Minsk'], // Status: Accurate

  // Latvia - done
  Liepāja: ['Riga'], // Status: Accurate
  Riga: ['Pärnu', 'Valmiera'], // Status: Accurate
  Valmiera: ['Tartu', 'Pskov'], // Status: Accurate

  // Estonia - done
  Pärnu: ['Tartu', 'Tallinn'], // Status: Accurate
  Tartu: ['Narva'], // Status: Accurate
  Narva: ['Petersburg'], // Status: Accurate
  Tallinn: ['Narva'], // Status: Accurate

  // Belarus - done
  Brest: ['Baranavichy', 'Lutsk'], // Status: Accurate
  Baranavichy: ['Minsk', 'Salihorsk'], // Status: Accurate
  Salihorsk: ['Mazyr', 'Babruysk'], // Status: Accurate
  Mazyr: ['Gomel', 'Chernihiv'], // Status: Accurate
  Gomel: ['Chernihiv', 'Klintsy'], // Status: Accurate
  Minsk: ['Orsha', 'Babruysk', 'Mogilev'], // Status: Accurate
  Mogilev: ['Orsha', 'Gomel'], // Status: Accurate
  Babruysk: ['Gomel', 'Mogilev'], // Status: Accurate
  Orsha: ['Smolensk'], // Status: Accurate

  // Ukraine - done
  Chernihiv: ['Nizhyn', 'Koryukivka'], // Status: Accurate
  Nizhyn: ['Baturyn', 'Pyryatyn'], // Status: Accurate
  Pyryatyn: ['Poltava'], // Status: Accurate
  Poltava: ['Kharkiv', 'Dnipro'], // Status: Accurate
  Dnipro: ['Pavlohrad', 'Zaporizhzhia'], // Status: Accurate
  Pavlohrad: ['Donetsk', 'Kramatorsk'], // Status: Accurate
  Kramatorsk: ['Luhansk'], // Status: Accurate
  Luhansk: ['Rostov'], // Status: Accurate
  Zaporizhzhia: ['Donetsk', 'Mariupol'], // Status: Accurate
  Donetsk: ['Rostov'], // Status: Accurate
  Kharkiv: ['Belgorod', 'Donetsk'], // Status: Accurate
  Koryukivka: ['Sumy', 'Bryansk'], // Status: Accurate
  Sumy: ['Kharkiv', 'Kursk'], // Status: Accurate
  Baturyn: ['Sumy'], // Status: Accurate
  Mariupol: ['Rostov'], // Status: Accurate
  Mukachevo: ['Khmelnytskyi'], // Status: Accurate
  Khmelnytskyi: ['Kyiv'], // Status: Accurate
  Kyiv: ['Poltava', 'Donetsk'], // Status: Accurate
  Sevastopol: ['Rostov'], // Status: Accurate`



  // Russia - done
  Rostov: ['You have reached a victory city!'], // Status: Accurate
  Smolensk: ['You have reached a victory city!'], // Status: Accurate
  Petersburg: ['You have reached a victory city!'], // Status: Accurate
  Bryansk: ['Roslavl'], // Status: Accurate
  Roslavl: ['Smolensk'], // Status: Accurate
  Pskov: ['Luga'], // Status: Accurate
  Luga: ['Petersburg'], // Status: Accurate
  Belgorod: ['Kursk', 'Rossosh'], // Status: Accurate
  Kursk: ['Bryansk'], // Status: Accurate
  Rossosh: ['Millerovo'], // Status: Accurate
  Millerovo: ['Rostov'], // Status: Accurate
  Klintsy: ['Bryansk'], // Status: Accurate

  // **CENTRAL ROUTE - TOWARDS BLACK SEA **

  // Czechia - done
  Prague: ['Brno', 'Pardubice'], // Status: Accurate
  Brno: ['Bratislava', 'Ostrava'], // Status: Accurate
  Ostrava: ['Krakow', 'Žilina', 'Częstochowa'], // Status: Accurate
  Pardubice: ['Brno', 'Wrocław', 'Ostrava'], // Status: Accurate

  // Switzerland - done]
  Geneva: ['Bern', 'Turin'], // Status: Accurate
  Bern: ['Milan', 'Zürich'], // Status: Accurate
  Zürich: ['Stuttgart', 'Milan', 'Vaduz'], // Status: Accurate

  // Liechtenstein - done
  Vaduz: ['Munich', 'Innsbruck', 'Trento'], // Status: Accurate

  // Italy - done
  Milan: ['Parma', 'Verona'], // Status: Accurate
  Parma: ['Bologna', 'Florence', 'Verona'], // Status: Accurate
  Turin: ['Milan', 'Genoa', 'Bologna'], // Status: Accurate
  Genoa: ['Bologna', 'Florence', 'Milan'], // Status: Accurate
  Bologna: ['Florence', 'Ravenna'], // Status: Accurate
  Florence: ['Rome', 'Ancona'], // Status: Accurate
  Ancona: ['Zadar', 'Split', 'Pescara'], // Status: Accurate
  Pescara: ['Foggia'], // Status: Accurate
  Foggia: ['Bari'], // Status: Accurate
  Rome: ['Naples'], // Status: Accurate
  Naples: ['Bari', 'Cosenza'], // Status: Accurate
  Cosenza: ['Catania'], // Status: Accurate
  Catania: ['Palermo'], // Status: Accurate
  Palermo: ['Tunis'], // Status: Accurate
  Bari: ['Dubrovnik', 'Brindisi', 'Cosenza'], // Status: Accurate
  Brindisi: ['Patras'], // Status: Accurate

  // Greece - done
  Patras: ['Athens'], // Status: Accurate
  Athens: ['Thessaloniki'], // Status: Accurate
  Thessaloniki: ['Plovdiv', 'Tekirdağ'], // Status: Accurate

  // Turkey - done
  Tekirdağ: ['Istanbul'], // Status: Accurate
  Istanbul: ['You have reached a victory city!'], // Status: Accurate

  // Tunisia - done
  Tunis: ['You have reached a victory city!'], // Status: Accurate

  // Austria - done
  Innsbruck: ['Graz', 'Salzburg'], // Status: Accurate
  Graz: ['Zagreb', 'Budapest', 'Bratislava', 'Vienna'], // Status: Accurate
  Salzburg: ['Vienna', 'Linz', 'Graz'], // Status: Accurate
  Linz: ['Vienna', 'Prague', 'Brno'], // Status: Accurate
  Vienna: ['Bratislava', 'Budapest', 'Brno'], // Status: Accurate

  // Slovenia - done
  Llubljana: ['Zagreb', 'Rijeka'], // Status: Accurate

  // Croatia - done
  Zagreb: ['Gradiška', 'Budapest', 'Osijek'], // Status: Accurate
  Rijeka: ['Zadar', 'Zagreb'], // Status: Accurate
  Zadar: ['Split'], // Status: Accurate
  Split: ['Dubrovnik', 'Mostar', 'Sarajevo'], // Status: Accurate
  Dubrovnik: ['Podgorica', 'Shkodër', 'Niksic'], // Status: Accurate

  // Montenegro - done
  Podgorica: ['Shkodër', 'Tirana', 'Berane'], // Status: Accurate
  Berane: ['Pristina', 'Mitrovica'], // Status: Accurate

  // Bosnia - done
  Mostar: ['Sarajevo', 'Podgorica', 'Dubrovnik'], // Status: Accurate
  Sarajevo: ['Tuzla', 'Loznica'], // Status: Accurate
  Gradiška: ['Osijek', 'Tuzla'], // Status: Accurate
  Tuzla: ['Loznica', 'Belgrade'], // Status: Accurate

  // Serbia - done
  Belgrade: ['Kragujevac', 'Timișoara'], // Status: Accurate
  Loznica: ['Belgrade', 'Kragujevac'], // Status: Accurate
  Kragujevac: ['Niš'], // Status: Accurate
  Niš: ['Sofia'], // Status: Accurate

  // Kosovo - done
  Mitrovica: ['Pristina', 'Skopje'], // Status: Accurate
  Gjakova: ['Pristina', 'Skopje'], // Status: Accurate
  Pristina: ['Skopje', 'Niš'], // Status: Accurate

  // Macedonia - done
  Skopje: ['Sofia', 'Thessaloniki'], // Status: Accurate

  // Slovakia - done
  Bratislava: ['Budapest', 'Banská'], // Status: Accurate
  Banská: ['Košice', 'Krakow', 'Miskolc'], // Status: Accurate
  Košice: ['Mukachevo', 'Nyíregyháza'], // Status: Accurate

  // Hungary - done
  Budapest: ['Szeged', 'Oradea', 'Timișoara', 'Nyíregyháza'], // Status: Accurate
  Szeged: ['Timișoara', 'Belgrade'], // Status: Accurate
  Nyíregyháza: ['Mukachevo', 'Oradea'], // Status: Accurate

  // Romania - done
  Oradea: ['Cluj_Napoca'], // Status: Accurate
  Cluj_Napoca: ['Brașov', 'Pașcani'], // Status: Accurate
  Brașov: ['Bucharest', 'Brăila'], // Status: Accurate
  Bucharest: ['Varna', 'Burgas'], // Status: Accurate
  Pașcani: ['Iaşi'], // Status: Accurate
  Iaşi: ['Chișinău', 'Odesa'], // Status: Accurate
  Brăila: ['Varna', 'Bucharest'], // Status: Accurate
  Timișoara: ['Cluj_Napoca'], // Status: Accurate

  // Albania - done
  Shkodër: ['Gjakova', 'Tirana'], // Status: Accurate
  Tirana: ['Gjakova', 'Skopje'], // Status: Accurate

  // Bulgaria - done
  Varna: ['You have reached a victory city!'], // Status: Accurate
  Burgas: ['Istanbul', 'Varna'], // Status: Accurate
  Sofia: ['Sevlievo', 'Plovdiv'], // Status: Accurate
  Plovdiv: ['Svilengrad'], // Status: Accurate
  Svilengrad: ['Istanbul', 'Burgas'], // Status: Accurate

  // Moldova - done
  Chișinău: ['Odesa', 'Dnipro', 'Kyiv'], // Status: Accurate

  // **SOUTHERN ROUTE - TOWARDS AFRICA **

  //Andorra - done
  Andorra: ['Zaragoza', 'Barcelona'], // Status: Accurate

  // Spain - done
  Barcelona: ['Valencia', 'Zaragoza', 'Algiers'], // Status: Accurate
  Valencia: ['Albacete', 'Murcia'], // Status: Accurate
  Zaragoza: ['Sigüenza', 'Valencia'], // Status: Accurate
  Sigüenza: ['Madrid', 'Albacete'], // Status: Accurate
  Albacete: ['Murcia', 'Villacarrillo'], // Status: Accurate
  Murcia: ['Almeria', 'Granada'], // Status: Accurate
  Almeria: ['Granada', 'Ghazaouet'], // Status: Accurate
  Bilbao: ['León', 'Burgos'], // Status: Accurate
  Burgos: ['Madrid', 'Salamanca'], // Status: Accurate
  Salamanca: ['Cáceres', 'Madrid'], // Status: Accurate
  Cáceres: ['Seville'], // Status: Accurate
  Malaga: ['Tarifa'], // Status: Accurate
  Tarifa: ['Tangier'], // Status: Accurate

  // Morocco - done
  Tangier: ['You have reached a victory city!'], // Status: Accurate

  // Algeria - done
  Algiers: ['You have reached a victory city!'], // Status: Accurate
  Ghazaouet: ['You have reached a victory city!'], // Status: Accurate

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

  const theme = useTheme();
  const isMobile = UseMediaQuery(theme.breakpoints.down('sm'));
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState(0);
  const [newTown, setNewTown] = useState('');
  const [sleepStatus, setSleepStatus] = useState("Sleeping rough");
  const [eatingStatus, setEatingStatus] = useState("Going hungry");
  const [waitConfirm, setWaitConfirm] = useState(false);
  const [walkConfirm, setWalkConfirm] = useState(false);

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

  function wait() {
    props.setTime(18);
    setWaitConfirm(false);
  }

  function handleWaitClick() {
    setWaitConfirm(true);
  }

  function walk() {
    setWalkConfirm(true);
  }

  return (

    <div>

    <div id="containerFade" style={{display: 'flex', flexDirection: 'row', width: '90%', margin: '0 auto', height: '60vh',justifyContent: 'center', alignItems: 'flex-start', backgroundColor: evening? 'rgb(90, 90, 90)' : 'white', color: 'black'}}>
      

      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>

        <h2>Day {props.day}</h2>
        {!evening && <h3 id="clock" style={{marginTop: '-2px'}}>{props.time}:00</h3>}
        {!travelling && <p style={{fontSize: isMobile ? '10px' : '14px', marginTop: '-2px', color: evening? 'white' : 'black'}}>You are in {props.currentTown}, {props.country}.</p>}   
        {!travelling && props.noFood && <p style={{marginTop: '-2px', color: 'red', width: '300px'}}>Warning: You are starving. You will lose health tonight unless you eat.</p>}
        
        {!evening && (
        <div>     
        {!deciding && !walkConfirm && !waitConfirm && !exploring && !travelling && (
          <div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '25px', marginBottom: '2vh'}}>
            <button style={{
            width: isMobile ? '30vw' : '12vw',
            height: isMobile ? '6vh' : '5vh',
            fontSize: '16px',
            fontFamily: "'Preahvihear', sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: "4px groove rgb(60, 60, 190)",
            backgroundColor: 'rgb(100, 100, 220)',
            borderRadius: '10px',
            color: 'black',
            fontWeight: 'bold',

            }}onClick={hitchhike}>Hitchhike</button>
            <button style={{
            width: isMobile ? '30vw' : '12vw',
            height: isMobile ? '6vh' : '5vh',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: "'Preahvihear', sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: "4px groove rgb(60, 190, 60)",
            backgroundColor: 'rgb(80, 210, 80)',
            borderRadius: '10px',
            color: 'black',
            }} onClick={handleExploreClick}>Explore</button>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '25px'}}>
            <button onClick={walk} style={{
            width: isMobile ? '30vw' : '12vw',
            height: isMobile ? '6vh' : '5vh',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: "'Preahvihear', sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: "4px groove rgb(190, 60, 60)",
            backgroundColor: 'rgb(190, 80, 80)',
            borderRadius: '10px',
            color: 'black',
            }}>Walk</button>
            <button onClick={handleWaitClick} style={{
            width: isMobile ? '30vw' : '12vw',
            height: isMobile ? '6vh' : '5vh',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: "'Preahvihear', sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: "4px groove rgb(160, 90, 40)",
            backgroundColor: 'rgb(190, 100, 60)',
            borderRadius: '10px',
            color: 'black',
            }}>Wait</button>
            </div>
          </div>
            )}
            {exploring && (
              <div>
                <ExploreMenu setTravelling={setTravelling} setExploring={setExploring} currentTown={props.currentTown} setCurrentTown={props.setCurrentTown} health={props.health} setHealth={props.setHealth} food={props.food} setFood={props.setFood} money={props.money} setMoney={props.setMoney} time={props.time} setTime={props.setTime} />
              </div>)}

        {walkConfirm && (
          
          <div>
            <WalkMenu inventory={props.inventory} setInventory={props.setInventory}  setWalkConfirm={setWalkConfirm} health={props.health} setHealth={props.setHealth} food={props.food} setFood={props.setFood} money={props.money} setMoney={props.setMoney} time={props.time} setTime={props.setTime}/>
          </div>)}
        

        {waitConfirm && (
          
          <div>
            <p style={{fontSize: isMobile ? '10px' : '14px'}}>You decide to wait around until evening.</p>
            <button style={{width: isMobile ? '20vw' : '12vw',}} onClick={wait} className="keyButtons">Proceed</button>
          </div>)}
        
        {deciding && (
          <div>
            <p style={{fontSize: isMobile ? '10px' : '14px'}}>You spend a couple of hours with your thumb in the air.</p>
            <p style={{width: isMobile? '300px' : '60vw', fontSize: isMobile ? '10px' : '14px'}}>{message}</p>
            <p style={{fontSize: isMobile ? '10px' : '14px'}}>Do you agree?</p>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
            <button style={{
            width: isMobile ? '20vw' : '12vw',
            height: '4vh',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: "'Preahvihear', sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: "4px groove rgb(50, 180, 50)",
            backgroundColor: 'rgb(80, 210, 80)',
            borderRadius: '10px',
            color: 'black',
            }}
            onClick={accept}>Yes</button>
            <button style={{
            width: isMobile ? '20vw' : '12vw',
            height: '4vh',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: "'Preahvihear', sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: "4px groove rgb(180, 50, 50)",
            backgroundColor: 'rgb(210, 80, 80)',
            borderRadius: '10px',
            color: 'black', }} onClick={decline}>No</button>
            </div>
          </div>
        )}

        {travelling && (
          <div>
            <TravelMenu setGame={props.setGame} setGameOverType={props.setGameOverType} money={props.money} setMoney={props.setMoney} day={props.day} setDay={props.setDay}  setActualTown={props.setActualTown} setTime={props.setTime} time={props.time} setTravelling={setTravelling} currentTown={props.currentTown} health={props.health} food={props.food} setHealth={props.setHealth} setFood={props.setFood} />
          </div>
        )}

      </div>)}
      {evening && (
        <div>
          {eveningBlurb && (
            <div>
              <p style={{color: 'white'}}>You run out of time - it's getting late.</p>
              <p style={{color: 'white'}}>It's early evening now - too late to hitch a ride or explore town.</p>
            </div>)}
          <EveningMenu noFood={props.noFood} setEveningBlurb={setEveningBlurb} setDeciding={setDeciding} day={props.day} setDay={props.setDay} time={props.time} setTime={props.setTime} sleepStatus={sleepStatus} setSleepStatus={setSleepStatus} eatingStatus={eatingStatus} setEatingStatus={setEatingStatus} setEvening={setEvening} health={props.health} setHealth={props.setHealth} food={props.food} setFood={props.setFood} money={props.money} setMoney={props.setMoney}/>
      </div>
      )}
      </div>
      
    </div>
    
    </div>
  );
}
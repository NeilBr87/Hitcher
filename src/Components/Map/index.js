import UK from './UK.JPG'
import NorthernFrance from './NorthernFrance.JPG'
import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Map(props) {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [image, setImage] = useState(UK);
      useEffect (() => {
        if (props.actualTown === 'London' || props.actualTown === 'Dover' || props.actualTown === 'Folkestone' || props.actualTown === 'Crawley' || props.actualTown === 'Maidstone' || props.actualTown === 'Winchester' || props.actualTown === 'Portsmouth' || props.actualTown === 'Newhaven') {
            setImage(UK);
        }
        // Northern France
        else if (props.actualTown === 'Calais' || props.actualTown === 'Lille' || props.actualTown === 'Amiens' || props.actualTown === 'Dieppe' || props.actualTown === 'Caen' || props.actualTown === 'Paris' || props.actualTown === 'Tours' || props.actualTown === 'Dijon' || props.actualTown === 'Orleans' || props.actualTown === 'Reims') {
            props.setCountry('France');
            setImage(NorthernFrance);
        }
        // Southern France
        else if (props.actualTown === 'Bordeaux' || props.actualTown === 'Toulouse' || props.actualTown === 'Montpellier' || props.actualTown === 'Marseille' || props.actualTown === 'Nice' || props.actualTown === 'Lyon') {
            props.setCountry('France');
        }
        // Belgium
        else if (props.actualTown === 'Brussels' || props.actualTown === 'Antwerp') {
            props.setCountry('Belgium');
        }
        // Netherlands
        else if (props.actualTown === 'Amsterdam') {
            props.setCountry('Netherlands');
        }
        // Nothern Germany
        else if (props.actualTown === 'Berlin' || props.actualTown === 'Hamburg' || props.actualTown === 'Dusseldorf' || props.actualTown === 'Cologne' || props.actualTown === 'Duisburg' || props.actualTown === 'Hanover' || props.actualTown === 'Leipzig' || props.actualTown === 'Dresden' || props.actualTown === 'Bremen' || props.actualTown === 'Flensburg') {
            props.setCountry('Germany');
        }
        // Southern Germany
        else if (props.actualTown === 'Frankfurt' || props.actualTown === 'Munich' || props.actualTown === 'Stuttgart' || props.actualTown === 'Nuremberg') {
            props.setCountry('Germany');
        }
        // Denmark
        else if (props.actualTown === 'Copenhagen') {
            props.setCountry('Denmark');
        }
        // Sweden
        else if (props.actualTown === 'Stockholm' || props.actualTown === 'Jönköping') {
            props.setCountry('Sweden');
        }
        // Finland
        else if (props.actualTown === 'Turku' || props.actualTown === 'Helsinki') {
            props.setCountry('Finland');
        }
        // Poland
        else if (props.actualTown === 'Szczecin' || props.actualTown === 'Poznań' || props.actualTown === 'Wrocław' || props.actualTown === 'Częstochowa' || props.actualTown === 'Warsaw' || props.actualTown === 'Białystok' || props.actualTown === 'Krakow' || props.actualTown === 'Łódź' || props.actualTown === 'Koszalin' || props.actualTown === 'Gdansk') {
            props.setCountry('Poland');
        }
        // Baltic Russia
        else if (props.actualTown === 'Kaliningrad') {
            props.setCountry('Russia');
        }
        // Lithuania
        else if (props.actualTown === 'Vilnius' || props.actualTown === 'Klaipėda' || props.actualTown === 'Kaunas' || props.actualTown === 'Šiauliai') { 
            props.setCountry('Lithuania');
        }
        // Latvia
        else if (props.actualTown === 'Riga' || props.actualTown === 'Liepāja' || props.actualTown === 'Valmeira') {
            props.setCountry('Latvia');
        }
          // Estonia
        else if (props.actualTown === 'Pärnu' || props.actualTown === 'Tartu' || props.actualTown === 'Narva' || props.actualTown === 'Tallinn') {
            props.setCountry('Estonia');
        }
          // Belarus
        else if (props.actualTown === 'Brest' || props.actualTown === 'Baranavichy' || props.actualTown === 'Salihorsk' || props.actualTown === 'Mazyr' || props.actualTown === 'Gomel' || props.actualTown === 'Minsk' || props.actualTown === 'Mogilev' || props.actualTown === 'Babruysk' || props.actualTown === 'Orsha') {
            props.setCountry('Belarus');
        }
        // Ukraine
        else if (props.actualTown === 'Chernihiv' || props.actualTown === 'Nizhyn' || props.actualTown === 'Pyryatyn' || props.actualTown === 'Poltava' || props.actualTown === 'Dnipro' || props.actualTown === 'Pavlohrad' || props.actualTown === 'Kramatorsk' || props.actualTown === 'Luhansk' || props.actualTown === 'Zaporizhzhia' || props.actualTown === 'Donetsk' || props.actualTown === 'Kharkiv' || props.actualTown === 'Koryukivka' || props.actualTown === 'Sumy' || props.actualTown === 'Baturyn' || props.actualTown === 'Mariupol' || props.actualTown === 'Mukachevo' || props.actualTown === 'Khmelnytskyi' || props.actualTown === 'Kyiv' || props.actualTown === 'Sevastopol') {
            props.setCountry('Ukraine');
        }
        // Russia
        else if (props.actualTown === 'Rostov' || props.actualTown === 'Smolensk' || props.actualTown === 'Petersburg' || props.actualTown === 'Bryansk' || props.actualTown === 'Roslavl' || props.actualTown === 'Pskov' || props.actualTown === 'Luga' || props.actualTown === 'Belgorod' || props.actualTown === 'Kursk' || props.actualTown === 'Rossosh' || props.actualTown === 'Millerovo' || props.actualTown === 'Klintsky') {
            props.setCountry('Russia');
        }
         // Czechia
        else if (props.actualTown === 'Prague' || props.actualTown === 'Brno' || props.actualTown === 'Ostrava' || props.actualTown === 'Pardubice') {
            props.setCountry('Czechia');
        }
        // Switzerland (Geneva, Bern, Zürich)
        else if (props.actualTown === 'Geneva' || props.actualTown === 'Bern' || props.actualTown === 'Zürich') {
            props.setCountry('Switzerland');
        }
        // Leichenstein
        else if (props.actualTown === 'Vaduz') {
            props.setCountry('Leichenstein');
        }
        // Italy
        else if (props.actualTown === 'Milan' || props.actualTown === 'Parma' || props.actualTown === 'Turin' || props.actualTown === 'Genoa' || props.actualTown === 'Bologna' || props.actualTown === 'Florence' || props.actualTown === 'Ancona' || props.actualTown === 'Pescara' || props.actualTown === 'Foggia' || props.actualTown === 'Rome' || props.actualTown === 'Naples' || props.actualTown === 'Cosenza' || props.actualTown === 'Catania' || props.actualTown === 'Palermo' || props.actualTown === 'Bari' || props.actualTown === 'Brindisi') {
            props.setCountry('Italy');
        }
        // Greece
        else if (props.actualTown === 'Patras' || props.actualTown === 'Athens' || props.actualTown === 'Thessaloniki') {
            props.setCountry('Greece');
        }
        // Turkey (Istanbul, Tekirdağ)
        else if (props.actualTown === 'Istanbul' || props.actualTown === 'Tekirdağ') {
            props.setCountry('Turkey');
        }
        // Tunisia (Tunis)
        else if (props.actualTown === 'Tunis') {
            props.setCountry('Tunisia');
        }
        // Austria (Innsbruck, Graz, Salzburg, Linz, Vienna)
        else if (props.actualTown === 'Innsbruck' || props.actualTown === 'Graz' || props.actualTown === 'Salzburg' || props.actualTown === 'Linz' || props.actualTown === 'Vienna') {
            props.setCountry('Austria');
        }
        // Slovenia (Ljubljana)
        else if (props.actualTown === 'Ljubljana') {
            props.setCountry('Slovenia');
        }
        // Croatia (Zagreb, Rijeka, Zadar, Split, Dubrovnik)
        else if (props.actualTown === 'Zagreb' || props.actualTown === 'Rijeka' || props.actualTown === 'Zadar' || props.actualTown === 'Split' || props.actualTown === 'Dubrovnik') {
            props.setCountry('Croatia');
        }
        // Montenegro (Podgorica, Berane)
        else if (props.actualTown === 'Podgorica' || props.actualTown === 'Berane') {
            props.setCountry('Montenegro');
        }
        // Bosnia
        else if (props.actualTown === 'Sarajevo' || props.actualTown === 'Gradiška' || props.actualTown === 'Mostar' || props.actualTown === 'Tuzla') {
            props.setCountry('Bosnia and Herzegovina');
        }
        // Serbia (Belgrade, Loznica, Niš, Kragujevac)
        else if (props.actualTown === 'Belgrade' || props.actualTown === 'Loznica' || props.actualTown === 'Niš' || props.actualTown === 'Kragujevac') {
            props.setCountry('Serbia');
        }
        // Kosovo (Pristina, Gjakova, Mitrovica)
        else if (props.actualTown === 'Pristina' || props.actualTown === 'Gjakova' || props.actualTown === 'Mitrovica') {
            props.setCountry('Kosovo');
        }
        // Macedonia (Skopje)
        else if (props.actualTown === 'Skopje') {
            props.setCountry('Macedonia');
        }
        // Slovakia (Bratislava, Košice, Košice)
        else if (props.actualTown === 'Bratislava' || props.actualTown === 'Košice' || props.actualTown === 'Košice') {
            props.setCountry('Slovakia');
        }
        // Hungary (Budapest, Szeged, Nyíregyháza)
        else if (props.actualTown === 'Budapest' || props.actualTown === 'Szeged' || props.actualTown === 'Nyíregyháza') {
            props.setCountry('Hungary');
        }
        // Romania (Timișoara, Pascani, Oradea, Cluj_Napoca, Brașov, Bucharest, Iaşi, Brăila )
        else if (props.actualTown === 'Timișoara' || props.actualTown === 'Pascani' || props.actualTown === 'Oradea' || props.actualTown === 'Cluj_Napoca' || props.actualTown === 'Brașov' || props.actualTown === 'Bucharest' || props.actualTown === 'Iaşi' || props.actualTown === 'Brăila') {
            props.setCountry('Romania');
        }
        // Albania (Shkodër, Tirana)
        else if (props.actualTown === 'Shkodër' || props.actualTown === 'Tirana') {
            props.setCountry('Albania');
        }
        // Bulgaria (Sofia, Plovdiv, Varna, Burgas, Svilengrad)
        else if (props.actualTown === 'Sofia' || props.actualTown === 'Plovdiv' || props.actualTown === 'Varna' || props.actualTown === 'Burgas' || props.actualTown === 'Svilengrad') {
            props.setCountry('Bulgaria');
        }
        // Moldova (Chișinău)
        else if (props.actualTown === 'Chișinău') {
            props.setCountry('Moldova');
        }
        // Andorra
        else if (props.actualTown === 'Andorra') {
            props.setCountry('Andorra');
        }
        // Spain
        else if (props.actualTown === 'Barcelona' || props.actualTown === 'Valencia' || props.actualTown === 'Zaragoza' || props.actualTown === 'Sigüenza' || props.actualTown === 'Albacete' || props.actualTown === 'Murcia' || props.actualTown === 'Almeria' || props.actualTown === 'Bilbao' || props.actualTown === 'Burgos' || props.actualTown === 'Salamanca' || props.actualTown === 'Cáceres' || props.actualTown === 'Malaga' || props.actualTown === 'Tarifa') {
            props.setCountry('Spain');
        }
        // Morocco (Tangier)
        else if (props.actualTown === 'Tangier') {
            props.setCountry('Morocco');
        }
        // Algeria (Algiers, Ghazaouet)
        else if (props.actualTown === 'Algiers' || props.actualTown === 'Ghazaouet') {
            props.setCountry('Algeria');
        }
            else {
            setImage(UK);
        }
        }, [props.actualTown, props]);
       

    return (
        <div style={{marginTop: isMobile ? '0vh' : '-3vh'}}>
            <img id="mapImage" src={image} alt="UK" style={{width: isMobile ? '36vw' : '18vw', height: isMobile ? '15vh' : '18vh', borderRadius: '10px', border: '2px inset rgb(10, 20, 80)'}}/>
        </div>
    );
    }

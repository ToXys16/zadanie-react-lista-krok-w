import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [zawartosc, setzawartosc] = useState([
    {id:1, sekcja1:'wes chleb', sekcja2:'posmaruj maslem', sekcja3: 'podsmarz na grilu', count:0},
    {id:2, sekcja1:'usmarz bekon', sekcja2:'pokrój ważywa', sekcja3: 'zrób sos', count:0},
    {id:3, sekcja1:'posmaruj chleb sosem', sekcja2:'połóż ważywa i bekon', sekcja3: 'przykryj drugą kromkom', count:0},
  ]);
  const kliknext = (boxid) => {
    setzawartosc(prevzawartosc =>{
      return prevzawartosc.map(item =>{
        if(item.id === boxid && item.count < 2){
          const nextcount = (item.count + 1);
          return{...item, count: nextcount};
        }
        return item;
      });
    });
  };
  const klikprev = (boxid) => {
    setzawartosc(prevzawartosc =>{
      return prevzawartosc.map(item =>{
        if(item.id === boxid && item.count > 0){
          const nextcount = (item.count - 1);
          return{...item, count: nextcount};
        }
        return item;
      });
    });
  };
  const getacczawwartosc = (blockdata) => {
 if (!blockdata){
    return '';
  }

    if (blockdata.count === 0){
      return blockdata.sekcja1;
    } else if (blockdata.count === 1){
      return blockdata.sekcja2;
    } else if (blockdata.count === 2){
      return blockdata.sekcja3;
    }
    return '';
    };
  return (
    <>
    <h1>jak zrobic kanapke</h1>
    {zawartosc.map(blockdata =>(
    <div className={`boxnr${blockdata.id}`} key={blockdata.id} style={{  
      border: "4px black solid",
      borderRadius: "1.6rem",
      margin: "5px"
}}>
       <h2> krok:{blockdata.id}</h2>
      <p className='zawartosc'>{getacczawwartosc(blockdata)}</p>
      <button className='prev' onClick={() => klikprev(blockdata.id)}>prev</button>
      <button className='next' onClick={() => kliknext(blockdata.id)}>next</button>
    </div>
    ))}
    </>
  );
}

export default App;

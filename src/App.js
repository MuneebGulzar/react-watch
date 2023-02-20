import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  let fecha = new Date();
  const [hora, setHora] = useState('0')
  const [minutos, setMinutos] = useState('0')
  const [segundos, setSegundos] = useState('0')

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(fecha.getHours());
      setMinutos(fecha.getMinutes());
      setSegundos(fecha.getSeconds())
      console.log(segundos + " en interval")
    }, 1000);
    return () => clearInterval(interval)
  }, [segundos])


  return (
    <div className='container'>
      <div className='watchContainer'>
        <div className="hContainer">{hora >=10 ? hora : '0' + hora}</div> :
        <div className="hContainer">{minutos >= 10 ? minutos : '0' + minutos}</div> :
        <div className="hContainer">{segundos >= 10 ? segundos : '0' + segundos}</div>
      </div>
    </div>
  );
}

export default App;

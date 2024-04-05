import { useState } from 'react'
import './App.css'

function App() {
  const [hi, setHi] = useState(0);
  const [mi, setMi] = useState(0);
  const [hf, setHf] = useState(0);
  const [mf, setMf] = useState(0);
  const [resultado, setResultado] = useState("Resultado");
  
  const soma = () => {
    let somaHora = Number(hi) + Number(hf);
    let somaMinuto = Number(mi) + Number(mf);
    
    while (somaMinuto > 59) {
      somaMinuto -= 60;
      somaHora++;
    }
    
    setResultado(`${somaHora}:${somaMinuto}`);
  }
  const sub = () => {
    let momentoInicial = hi * 60 + Number(mi);
    let momentoFinal = hf * 60 + Number(mf);
    let resultadoEmMinutos = Math.abs(momentoInicial - momentoFinal);
    let resultadoEmHoras = 0;

    while (resultadoEmMinutos > 59) {
      resultadoEmHoras++;
      resultadoEmMinutos -= 60;
    }
    setResultado('${resultadoEmHora}:${resultadoEmMinutos}');
  }
  return (
    <>
    <h1>Calculadora do Frango Do G de Horas</h1> 
    <div class="cabo">
        <h3>Escolha os horários que deseja calcular!</h3><br />
        <input 
        type="number" 
        value={hi} 
        onChange={(e) => setHi(e.target.value)}
        placeholder="Hora Inicial"/>&nbsp;&nbsp;

        <input 
        type="number" 
        value={mi} 
        onChange={(e) => setMi(e.target.value)}
        placeholder="Minuto Inicial"/> <br />

        <input 
        type="number" 
        value={hf} 
        onChange={(e) => setHf(e.target.value)}
        placeholder="Hora Final"/>&nbsp;&nbsp;

        <input 
        type="number" 
        value={mf} 
        onChange={(e) => setMf(e.target.value)}
        placeholder="Minuto final"/> <br /> <br />

        <button onClick={soma}>Soma</button> &nbsp;
        <button onClick={sub}>Diferença</button>
        <h3 id="r">{resultado}</h3>
    </div>
    </>
  )
}

export default App

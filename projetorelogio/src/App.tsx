import './App.css'
import { useEffect, useState } from 'react';
import { obterHoraAtual, obterDiaSemana } from './utils/tempo';

function App() {
  const [hora, setHora] = useState(obterHoraAtual());
   // Função que atualiza o estado da hora
   function atualizaHorario() {
    setHora(obterHoraAtual());
  }
  // Efeito para atualizar a hora a cada segundo
  useEffect(() => {
    const intervalo = setInterval(atualizaHorario, 1000);
    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, []);
  return (
    <div>
      <p>Hoje é: {obterDiaSemana()}</p>
      <p>Hora atual: 
      </p>
      <p>{hora}</p>
    </div>
  )
}

export default App

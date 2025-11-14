import {useEffect, useState} from 'react'
import PlayerChoice from './PlayerChoice.jsx'
import ComputerChoice from "./ComputerChoice.jsx";
import Result from './Result.jsx'
import Scoreboard from "./Scoreboard.jsx";
function App() {
  const [wins, setWins] = useState(0);
  const [ties, setTies] = useState(0);
  const [losses, setLosses] = useState(0);
  const [cpuChoiceName, setCpuChoiceName] = useState('question-mark');
  const [currentChoice, setCurrentChoice] = useState(-1);
  const [result, setResult] = useState("");
  useEffect(()=>{
        if(currentChoice === -1) return ()=>{return;};
        setResult("");
        let count = 0;
        let iid = setInterval(()=>{
            if(++count <= 6){
                setCpuChoiceName(["rock", "paper", "scissors"][count % 3]);
            } else {
                let cpuChoice = Math.floor(Math.random() * 3);
                setCpuChoiceName(["rock", "paper", "scissors"][cpuChoice])
                //outcome is dependent on the difference in values between player and computer choice
                let outcome = [
                    {txt: "Tie!", w: 0, t: 1, l: 0},
                    {txt: "You Won!", w: 1, t: 0, l: 0},
                    {txt: "You Lose!", w: 0, t: 0, l: 1},
                ][((currentChoice - cpuChoice + 3) % 3)];
                setResult(outcome.txt);
                setWins(wins + outcome.w);
                setTies(ties + outcome.t);
                setLosses(losses + outcome.l);

                clearInterval(iid);
                setCurrentChoice(-1);
            }
        }, 500)
        return () => {
            clearInterval(iid);
        }
      },
      [currentChoice])
  document.onkeyup =(e) => {
      console.log(e.key)
      if(e.key === "r"){
          document.querySelector("img[alt*=rock]").click();
      }
      if(e.key === "p"){
          document.querySelector("img[alt*=paper]").click();
      }
      if(e.key === "s"){
          document.querySelector("img[alt*=scissors]").click();
      }
  }
  return (
    <>
      <p>Player Choice:</p>
      <PlayerChoice currentChoice={currentChoice} choiceId={0} setChoice={setCurrentChoice} choiceName={"rock"}/>
      <PlayerChoice currentChoice={currentChoice} choiceId={1} setChoice={setCurrentChoice} choiceName={"paper"}/>
      <PlayerChoice currentChoice={currentChoice} choiceId={2} setChoice={setCurrentChoice} choiceName={"scissors"}/>
      <p>Computer Choice:</p>
      <ComputerChoice choiceName={cpuChoiceName}/>
      <Result result={result}/>
      <Scoreboard wins={wins} ties={ties} losses={losses} reset={()=>{setWins(0);setTies(0);setLosses(0);}}/>
    </>
  );
}

export default App

export default function PlayerChoice({currentChoice, choiceId, choiceName, setChoice}){
    return <img src={"src/assets/" + choiceName + ".PNG"} className={currentChoice === choiceId ? "selected" : ""} onClick={()=>setChoice(choiceId)}/>
}
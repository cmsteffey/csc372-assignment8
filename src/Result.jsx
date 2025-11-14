export default function Result({result}){
    return <span hidden={result === ""}> {result}</span>
}
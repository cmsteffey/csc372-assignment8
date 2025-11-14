export default function Scoreboard({wins, losses, ties, reset}) {
    return (
        <div class={"scoreboard"}>
            <p>Wins: {wins}</p>
            <p>Ties: {ties}</p>
            <p>Losses: {losses}</p>
            <button onClick = {reset}>Reset</button>
        </div>
    )
}
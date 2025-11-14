export default function Scoreboard({wins, losses, ties, reset}) {
    return (
        <section className={"scoreboard"}>
            <p>Wins: {wins}</p>
            <p>Ties: {ties}</p>
            <p>Losses: {losses}</p>
            <button onClick = {reset}>Reset</button>
        </section>
    )
}
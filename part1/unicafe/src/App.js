import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const average = (good + (-1 * bad) + 0 * neutral) / total
    const positive = good / total * 100

    if (total === 0) {
        return (
            <div>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <h2>statistics</h2>
            <table>
                <tbody>
                    <StatisticLine text='good' value={good} />
                    <StatisticLine text='neutral' value={neutral} />
                    <StatisticLine text='bad' value={bad} />
                    <StatisticLine text='all' value={total} />
                    <StatisticLine text='average' value={average} />
                    <StatisticLine text='positive' value={positive + ' %'} />
                </tbody>
            </table>
        </div>
    )
}

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <Button handleClick={() => setGood(good + 1)} text='good' />
                <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
                <Button handleClick={() => setBad(bad + 1)} text='bad' />
            </div>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
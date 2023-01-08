import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
import Die from "./components/Die"
import Stats from "./components/Stats"

function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [rolled, setRolled] = useState(0)
  const [stats, setStats] = useState(() => JSON.parse(localStorage.getItem("stats")) || [])

  useEffect(() => {
    const allEqual = dice => dice.every( item => item.value === dice[0].value )
    const allHeld = dice => dice.every(item => item.isHeld) 
    if(allEqual(dice) && allHeld(dice)) {
      setTenzies(true)
      setStats(prev => [...prev, {id:uuid(), roll: rolled}])
    }
  }, [dice, rolled])

  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats.slice(0,3)))
  }, [stats])

  const newDie = () => {
    return (
      { value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: uuid()}
    )
  }

  function allNewDice() {
    const valueArray = []
    for(let i = 0; i < 10; i++) {
      valueArray.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: uuid()
      })
    }
     return valueArray
  }

  const holdDice = id => setDice(prev => {
    return prev.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die)
  })

  const rollDice = () => {
    if(!tenzies) {
      setRolled(prev => prev + 1)
      setDice(prev => {
        return prev.map(die => {
          if(!die.isHeld) {
            return newDie()
          } else return die
        })
      })
    } else {
      setDice(allNewDice())
      setTenzies(false)
      setRolled(0)
    }
  }

  return (
    <main className="h-screen flex justify-center items-start md:items-center bg-neutral-900 font-dokdo">
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 pb-2  mx-2 md:mx-0
       md:h-3/4 h-2/3 px-1 md:px-10 rounded-[20px] bg-red-600 text-rose-200 mt-5 md:mt-0">
        <h1 className="text-7xl" >Tenzies</h1>
        <p className="text-xl md:text-4xl">Roll until all dice are the same.
           Click each die to freeze it at its current value between rolls.</p>
        <div className="grid grid-cols-5 gap-5">
          {dice.map(die => <Die key={die.id} {...die} handleClick={() => holdDice(die.id)} /> )}
        </div>
        <button 
          className="bg-neutral-900 mt-8 rounded-full text-3xl text-center px-1 md:px-3 py-1
                     outline-none active:shadow-inset w-full md:w-1/4"
          onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
          <p className="text-3xl mt-1">Rolled: {rolled}</p>
          <p className="text-3xl">Leaderboard:</p>
          <ol className="leading-none list-decimal" type="1">
            {stats.sort((a,b) => a.roll-b.roll).slice(0,3).map(roll => <Stats key={roll.id} {...roll} /> )} 
          </ol>
      </div>
    </main>
  )
}

export default App

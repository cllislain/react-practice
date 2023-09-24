import Cell from "./components/cell"
import { useState, useEffect } from "react"

const App = () => {

  const [cells, setCells] = useState(["","","","","","","","",""])
  const [go, setGo] = useState("CIRCLE")
  const [winningMessgage, setWinningMessage] = useState(null)

  const message = "It's now " + go + "'s turn!"

  console.log(cells)

 const checkScore = () => {
  const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [2,5,8], [1,4,7],
    [0,4,8], [2,4,6]
  ]

  winningCombos.forEach(array => {
    const circleWins = array.every(cell => cells[cell] === 'CIRCLE')

    if (circleWins) {
      setWinningMessage("CIRCLE wins!")
      return
    }
  })

  winningCombos.forEach(array => {
    const crossWins = array.every(cell => cells[cell] === 'CROSS')

    if (crossWins) {
      setWinningMessage("CROSS wins!")
      return
    }
  })

 }

  useEffect(() => {
    checkScore()
  }, [cells])

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => 
        <Cell 
        key={index} 
        id={index} 
        cell={cell}
        go={go}
        setGo={setGo}
        cells={cells}
        setCells={setCells}
        winningMessage={winningMessgage}/>)}
      </div>
      <p>{winningMessgage || message}</p>
    </div>
  )
}

export default App
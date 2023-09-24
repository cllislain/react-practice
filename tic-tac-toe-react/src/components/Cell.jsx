
const Cell = ({id, cell, cells, setCells, go, setGo, winningMessage}) => {

    const handleClick = (e) => {
        e.preventDefault()
        const taken = e.target.firstChild.classList.contains("CIRCLE") || e.target.firstChild.classList.contains("CROSS")

        if (!taken) {
            if (go === "CIRCLE") {
                e.target.firstChild.classList.add("CIRCLE")
                handleCellChange("CIRCLE")
                setGo("CROSS")
            }
            if (go === "CROSS") {
                e.target.firstChild.classList.add("CROSS")
                handleCellChange("CROSS")
                setGo("CIRCLE")
            }
        }
    }

    const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return className 
            } else {
                return cell
            }
        })
        setCells(nextCells)
    }

    
  return (
    <div className="square" id={id} onClick={!winningMessage &&handleClick}>
        <div className={cell}></div>
    </div>
  )
}

export default Cell
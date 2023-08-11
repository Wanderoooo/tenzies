import NumBar from "./NumBar"


export default function TenziesBoard(props) {

  return (
    <div className="flex justify-start items-center flex-col">
      <h1 className="text-3xl font-bold">Tenzies</h1>
      <p className="max-w-xs just5 m-2">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <NumBar children={props.children}/>
      <button type="button" className="w-36 bg-blue-400 h-12 rounded-md m-3" onClick={props.handleRoll}><strong>Roll</strong></button>
    </div>
  )
}
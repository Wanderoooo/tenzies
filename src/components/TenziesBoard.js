import NumBar from "./NumBar"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


export default function TenziesBoard(props) {

  const { width, height } = useWindowSize()

  return (
    <div className="flex justify-start items-center flex-col">
      <section>{props.isWin ? 
      <section>
      <h1 className="text-3xl font-bold m-8">You won!</h1>
    <Confetti
      width={width}
      height={height}
    />
      </section> :
      <section>
      <h1 className="text-3xl font-bold">Tenzies</h1>
      <p className="max-w-xs just5 m-2">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </section>}
      </section>
      <NumBar children={props.children}/>
      <button type="button" className="w-36 bg-blue-400 h-12 rounded-md m-3" onClick={props.handleRoll}><strong>Roll</strong></button>
    </div>
  )
}
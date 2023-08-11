
import NumButton from "./NumButton"

export default function NumBar(props) {

  return (
    <div className="grid grid-cols-5 gap-5 m-2">
      {props.children}
    </div>
  )
}
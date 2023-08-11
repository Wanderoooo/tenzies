export default function NumButton(props) {

  return (
    <div className={`w-14 h-14 ${props.isHeld ? "bg-green-500" : "bg-gray-100"} rounded-lg flex items-center justify-center drop-shadow-md shadow-md`} onClick={props.handleClick}>
      <h1>{props.value}</h1>
    </div>
  )
}
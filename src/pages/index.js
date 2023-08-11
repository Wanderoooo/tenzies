import { Inter } from 'next/font/google'
import TenziesBoard from '../components/TenziesBoard'
import { useState } from 'react'
import { nanoid } from "nanoid";
import NumButton from '@/components/NumButton';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [numbers, setNumbers] = useState(() => allNewDice())

  function allNewDice() {
    const diceArray = []

    for (let i = 0; i < 10; i++) {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      
      const newDice = {
        value: randomNum,
        isHeld: false,
        id: nanoid()
      }
      diceArray.push(newDice)
    }

    return diceArray;
  }

  function holdDie(id) {
    setNumbers(prevNum => {
      const newNum = prevNum.map(num => {
        return num.id === id ? {...num, isHeld: !num.isHeld} : num
      })

      return newNum
    })
  }

  const children = numbers.map(dice => {
    return <NumButton key={dice.id} value={dice.value} isHeld={dice.isHeld} handleClick={() => holdDie(dice.id)}/>
  })

  function handleRoll() {

    setNumbers(prevNum => {
      let updatedArray = []
      for (let i = 0; i < prevNum.length; i++) {
        if (prevNum[i].isHeld) {
          updatedArray.push(prevNum[i])
        } else {
          const randomNum = Math.floor(Math.random() * 6) + 1;
      
          const newDice = {
            value: randomNum,
            isHeld: false,
            id: nanoid()
          }
          updatedArray.push(newDice)
        }
      }

      return updatedArray
    })
  }


  return (
    <main className="w-bigr h-bigr bg-white rounded-2xl m-20 flex justify-center items-center">
      <TenziesBoard children={children} handleRoll={handleRoll} />
    </main>
  )
}

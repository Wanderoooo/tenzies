import Image from 'next/image'
import { Inter } from 'next/font/google'
import TenziesBoard from '../components/TenziesBoard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-bigr h-bigr bg-white rounded-2xl m-20 flex justify-center items-center">
      <TenziesBoard />
    </main>
  )
}

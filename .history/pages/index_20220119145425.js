import Head from 'next/head'
import Image from 'next/image'
import MenuBar from '../comps/MenuBar'
import Name from '../comps/Name'
import Position from '../comps/Position'



export default function Home() {
  return (
    <div>
      <MenuBar/>
      <Name/>
      <Position/>

    </div>
  )
}

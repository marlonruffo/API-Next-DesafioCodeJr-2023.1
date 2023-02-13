import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Navbar } from '../src/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Navbar NomeDoSite={'Cloud Service'} Item1={'Home'} Item2={'Contato'} Item3={'Funcionários'} Item4={'Login'} Logo={'/logonav.png'}/>
  )
}

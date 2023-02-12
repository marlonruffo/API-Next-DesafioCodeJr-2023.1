import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Navbar } from '../src/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Navbar NomeDoSite={'Nome do site teste'} Item1={'Home'} Item2={'Funcionários'} Item3={'Outro item'} Item4={'Login'}/>
  )
}

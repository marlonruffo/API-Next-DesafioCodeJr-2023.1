import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Navbar1 } from '../src/components/Navbar'
import { Footer1 } from '../src/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Navbar1 NomeDoSite={'Cloud Service'} Item1={'Home'} Item2={'Contato'} Item3={'Funcionários'} Item4={'Login'} Logo={'/logonav.png'}/>
    <Footer1 LogoEmpresa={'/cloudservice.png'} EscritaCentro={'Italian Cuisine'} LogoRedeSocial1={'/instagram.png'} LogoRedeSocial2={'/facebook.png'} LogoRedeSocial3={'/linkedin.png'} />
    </div>

  )
}

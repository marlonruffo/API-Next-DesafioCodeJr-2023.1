import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { CardContato1 } from '../src/components/Contato'
import { Footer1 } from '../src/components/Footer'
import { Navbar1 } from '../src/components/Navbar'



const inter = Inter({ subsets: ['latin'] })

export default function ContatoPage() {
  return (
    <div>
    <Navbar1 NomeDoSite={'Cloud Service'} Item1={'Home'} Item2={'Contato'} Item3={'Funcionários'} Item4={'Login'} Logo={'/logonav.png'}/>
    <Footer1 LogoEmpresa={'/cloudservice.png'} EscritaCentro={'Italian Cuisine'} LogoRedeSocial1={'/instagram.png'} LogoRedeSocial2={'/facebook.png'} LogoRedeSocial3={'/linkedin.png'} />
  
    <CardContato1 Titulo={'Entre em contato com a gente'} Imagem1={'/facebook.png'} Imagem2={'/instagram.png'} Imagem3={'/linkedin.png'} Imagem4={'/twitter.png'} LabelImagem1={'CloudRestaurant'} LabelImagem2={'CloudRestaurant'} LabelImagem3={'CloudRestaurant'} LabelImagem4={'@CloudRestaurant'}/>
    </div>

    
  )
}

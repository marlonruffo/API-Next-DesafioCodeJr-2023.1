import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { CardContato1 } from '../src/components/Contato'
import { Footer1 } from '../src/components/Footer'
import { Navbar1 } from '../src/components/Navbar'
import { CardLocalizacao } from '../src/components/CardLocalizacao'



const inter = Inter({ subsets: ['latin'] })

export default function ContatoPage() {
  return (

    <div className='containerpagcontatos'>
      <CardContato1  userInstagram={'Cloudrestaurant'} userFacebook={'Cloudrestaurant'} userEmail={'cloudservice@contato.com'}/>
      <CardLocalizacao endereco={'Instituto de Ciências Exatas - Rua José Lourenço Kelmer, Campus Universitário Bairro São Pedro CEP: 36036-900'}/>
    </div>

    

  )
}

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
    <div>
    <Navbar1 nomeDoSite={'Cloud Service'} item1={'Home'} item2={'Contato'} item3={'Funcionários'} item4={'Login'} logo={'/logonav.png'}/>
    <div className='containerpagcontatos'>
      <CardContato1  userInstagram={'Cloudrestaurant'} userFacebook={'Cloudrestaurant'} userEmail={'cloudservice@contato.com'}/>
      <CardLocalizacao endereco={'Instituto de Ciências Exatas - Rua José Lourenço Kelmer, Campus Universitário Bairro São Pedro CEP: 36036-900'}/>
    </div>

    <Footer1 logoEmpresa={'/cloudservice.png'} escritaCentro1={'Italian Cuisine'} logoRedeSocial11={'/instagram.png'} logoRedeSocial22={'/facebook.png'} logoRedeSocial33={'/linkedin.png'} />
    
    </div>
  )
}

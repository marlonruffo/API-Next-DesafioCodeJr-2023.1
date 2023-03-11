import { Inter } from '@next/font/google'
import { CardContato1 } from '../src/components/Contato'
import { CardLocalizacao } from '../src/components/CardLocalizacao'

export default function ContatoPage() {
  return (
<>
<div className='Titulopaginas'>Contato</div>
    <div className='containerpagcontatos'>
      <CardContato1  userInstagram={'Cloudrestaurant'} userFacebook={'Cloudrestaurant'} userEmail={'cloudservice@contato.com'}/>
      <CardLocalizacao endereco={'Instituto de Ciências Exatas - Rua José Lourenço Kelmer, Campus Universitário Bairro São Pedro CEP: 36036-900'}/>
    </div>
</>

  )
}

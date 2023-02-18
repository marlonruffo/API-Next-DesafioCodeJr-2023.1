import Head from 'next/head'
import Image from 'next/image'
import { CardFuncionario } from '../src/components/CardFuncionario'
import { Footer1 } from '../src/components/Footer'
import { Navbar1 } from '../src/components/Navbar'




export default function funcionariosPage() {
  return (
    <div className='Pagina-funcionarios'>
         <Navbar1 nomeDoSite={'Cloud Service'} item1={'Home'} item2={'Contato'} item3={'Funcionários'} item4={'Login'} logo={'/logonav.png'}/>
    <div className='Titulopaginas'>Funcionários</div>
        <div className='containerFunc'>
        <CardFuncionario/>
        <CardFuncionario/>
        <CardFuncionario/>


        
    </div>
    <Footer1 logoEmpresa={'/cloudservice.png'} escritaCentro1={'Italian Cuisine'} logoRedeSocial11={'/instagram.png'} logoRedeSocial22={'/facebook.png'} logoRedeSocial33={'/linkedin.png'} />

    </div>

  )
}
import Head from 'next/head'
import Image from 'next/image'
import { CardFuncionario } from '../src/components/CardFuncionario'
import { Footer1 } from '../src/components/Footer'
import { Navbar1 } from '../src/components/Navbar'




export default function funcionariosPage() {
  return (
    <div className='Pagina-funcionarios'>
    <div className='Titulopaginas'>Funcionários</div>
        <div className='containerFunc'>
        <CardFuncionario/>
        <CardFuncionario/>
        <CardFuncionario/>


        
    </div>

    </div>

  )
}
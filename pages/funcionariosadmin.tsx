import Head from 'next/head'
import Image from 'next/image'
import { CardFuncionario } from '../src/components/CardFuncionario'
import { Footer1 } from '../src/components/Footer'
import { Navbar1 } from '../src/components/Navbar'
import { funcionarios } from "../api.json";
import { TabelaAdmin } from '../src/components/TabelaAdmin'




export default function funcionariosadminPage() {
  return (
    <>
    <div className='Titulopaginas'>Funcionários admin</div>
    <div className='botaoaddfuncionario'>

    <button> Adicionar Funcionario</button>
    </div>
    <TabelaAdmin />
    </>


  )
}
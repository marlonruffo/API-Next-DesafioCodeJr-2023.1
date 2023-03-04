import Head from 'next/head'
import { useState } from 'react'
import NextImage from 'next/image'
import { Navbar1 } from '../src/components/Navbar'
import { Footer1 } from '../src/components/Footer'
import { TabelaAdmin } from '../src/components/TabelaAdmin'
import { funcionarios } from "../api.json"

export default function funcionariosadminPage() {
  return (
    <>
      <div className='Titulopaginas'>Funcionários admin</div>

      <TabelaAdmin />
      
    </>


  )
}
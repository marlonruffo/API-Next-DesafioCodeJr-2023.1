import Head from 'next/head'
import Image from 'next/image'
import { CardFuncionario } from '../src/components/CardFuncionario'
import { Footer1 } from '../src/components/Footer'
import { Navbar1 } from '../src/components/Navbar'
import { useState, useEffect } from "react";

export default function funcionariosPage() {
  const [listaFuncionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    async function fetchFuncionarios() {
      const res = await fetch('/api/funcionarios');
      const data = await res.json();
      setFuncionarios(data.funcionarios);
    }

    fetchFuncionarios();
  }, []);
  return (
    <div className='Pagina-funcionarios'>
    <div className='Titulopaginas'>Funcionários</div>
        <div className='containerFunc'>
        {listaFuncionarios.map((funcionario) => (
    <CardFuncionario
        key={funcionario.id}
        name={funcionario.name}
        email={funcionario.email}
        aniversario={funcionario.aniversario}
        cargo={funcionario.cargo}
    />
))}
    </div>

    </div>


  )
}
import Head from 'next/head'
import Image from 'next/image'
import { CardFuncionario } from '../src/components/CardFuncionario'
import { Footer1 } from '../src/components/Footer'
import { Navbar1 } from '../src/components/Navbar'
import { funcionarios } from "../api.json";


interface Funcionario {
  id: number;
  name: string;
  email: string;
  salario: number;
  aniversario: string;
  cargo: string;
}

export default function funcionariosPage() {
  return (
    <div className='Pagina-funcionarios'>
    <div className='Titulopaginas'>Funcionários</div>
        <div className='containerFunc'>
            {funcionarios.map((funcionario: Funcionario) => (
                <CardFuncionario
                    key={funcionario.id}
                    name={funcionario.name}
                    email={funcionario.email}
                    aniversario={funcionario.aniversario}
                    cargo={funcionario.cargo}
                />
            )
            )}
    </div>

    </div>


  )
}
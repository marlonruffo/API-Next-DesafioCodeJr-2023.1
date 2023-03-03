import Head from 'next/head'
import { useState } from 'react'
import NextImage from 'next/image'
import { Navbar1 } from '../src/components/Navbar'
import { Footer1 } from '../src/components/Footer'
import { TabelaAdmin } from '../src/components/TabelaAdmin'
import { funcionarios } from "../api.json"

interface Funcionario {
  id: number
  name: string
  email: string
  salario: number
  aniversario: string
  cargo: string
}

export default function funcionariosadminPage() {
  const [modalCriacaoAberto, setModalCriacaoAberto] = useState(false)
  const [novoFuncionario, setNovoFuncionario] = useState<Funcionario>({
    id: 0,
    name: '',
    email: '',
    salario: 0,
    aniversario: '',
    cargo: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setNovoFuncionario(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newFuncionario: Funcionario = {
      ...novoFuncionario,
      id: funcionarios.length + 1
    }
    funcionarios.push(newFuncionario)
    setModalCriacaoAberto(false)
    setNovoFuncionario({
      id: 0,
      name: '',
      email: '',
      salario: 0,
      aniversario: '',
      cargo: ''
    })
  }

  const ClickAddFuncionario = () => {
    setModalCriacaoAberto(true)
  }

  return (
    <>
      <div className='Titulopaginas'>Funcionários admin</div>
      <div className='botaoaddfuncionario'>
        <button onClick={ClickAddFuncionario}> Adicionar Funcionario</button>
      </div>
      <TabelaAdmin />
      {modalCriacaoAberto && (
        <div className='modal'>
          <div className='modal-conteudo'>
            <div className='Login_box login_boxfuncadmin'>
              <div className='LogoDoSite'>
                <NextImage src='/cloudservice.png' alt='Logo do Site' width={100} height={100} />
              </div>
              <form onSubmit={handleSubmit}>
                <div className='InputBoxesmodal'>
                  <div className='emailmodal modalprep'>
                    <label>Nome: </label>
                    <input type='name' name='name' value={novoFuncionario.name} onChange={handleChange} />
                  </div>
                  <div className='emailmodal modalprep'>
                    <label>Email: </label>
                    <input type='email' name='email' value={novoFuncionario.email} onChange={handleChange} />
                  </div>
                  <div className='salariomodal modalprep'>
                    <label>Salário:</label>
                    <input type='number' name='salario' value={novoFuncionario.salario} onChange={handleChange} />
                  </div>
                  <div className='aniversariomodal modalprep'>
                    <label>Aniversário:</label>
                    <input type='text' name='aniversario' value={novoFuncionario.aniversario} onChange={handleChange} />
                  </div>
                  <div className='cargomodal modalprep'>
                    <label>Cargo:</label>

                    <input type='text' name='cargo'value={novoFuncionario.cargo} onChange={handleChange} />
                  </div>
                    <div className='Botoes'>
                        <button onClick={() => setModalCriacaoAberto(false)}className='Voltar' ><a > Fechar </a></button>
                        <button type = 'submit'><a > Criar </a></button>
                    </div>
                </div>

            </form>
            </div>
    </div>
  </div>
)}
    </>


  )
}
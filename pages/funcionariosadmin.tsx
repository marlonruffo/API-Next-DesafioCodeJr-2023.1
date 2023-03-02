import Head from 'next/head'
import Image from 'next/image'
import { CardFuncionario } from '../src/components/CardFuncionario'
import { Footer1 } from '../src/components/Footer'
import { Navbar1 } from '../src/components/Navbar'
import { funcionarios } from "../api.json";
import { TabelaAdmin } from '../src/components/TabelaAdmin'
import { useState } from 'react';
import NextImage from 'next/image'



interface Funcionario {
  id: number;
  name: string;
  email: string;
  salario: number;
  aniversario: string;
  cargo: string;


}

export default function funcionariosadminPage() {
  const [modalCriacaoAberto, setModalCriacaoAberto] = useState(false);

  const ClickAddFuncionario = () => {
    setModalCriacaoAberto(true);
  };

  return (
    <>
    <div className='Titulopaginas'>Funcionários admin</div>
    
    <div className='botaoaddfuncionario'>

    <button onClick={() =>ClickAddFuncionario()}> Adicionar Funcionario</button>
    </div>
   
    <TabelaAdmin />
    {modalCriacaoAberto && (
  <div className="modal">
    <div className="modal-conteudo">
    <div className='Login_box login_boxfuncadmin'>
    <div className='LogoDoSite'>
                <NextImage src='/cloudservice.png' alt= 'Logo do Site' width={100} height={100} />
            </div>
            <form action='' method=''>
                <div className='InputBoxesmodal'>
                <div className='emailmodal modalprep'>

                <label>Nome: </label>
                <input type='name' name='nome'/>
                </div>
                  <div className='emailmodal modalprep'>

                    <label>Email: </label>
                    <input type='email' name='email'/>
                  </div>
                  <div className='salariomodal modalprep'>
                      <label>Salário:</label>
                    <input type='number' name='salario'/>
                  </div>
                  <div className='aniversariomodal modalprep'>
                    <label>Aniversário:</label>
                    <input type='text' name='aniversario'/>
                  </div>
                  <div className='cargomodal modalprep'>

                    <label>Cargo:</label>
                    <input type='text' name='cargo'/>
                  </div>
                    <div className='Botoes'>
                        <button onClick={() => setModalCriacaoAberto(false)}className='Voltar' ><a href='#'> Fechar </a></button>
                        <button ><a href='#'> Criar </a></button>
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
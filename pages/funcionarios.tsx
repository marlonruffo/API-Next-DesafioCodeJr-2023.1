import { CardFuncionario } from '../src/components/CardFuncionario'
import { useState, useEffect } from "react";
import axios from 'axios';

export default function funcionariosPage() {
  const [listaFuncionarios, setFuncionarios] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/funcionarios')
          .then(resposta => {
              setFuncionarios(resposta.data)
          })
          .catch(erro => {
              console.log(erro)
          })
  }, [])

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
        salario={funcionario.salario}
        cargo={funcionario.cargo}
    />
))}
    </div>

    </div>
  )
}
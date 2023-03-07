
import NextImage from 'next/image'
import { useState, useEffect } from "react";
import { MdEdit} from 'react-icons/md';
import { FiTrash2, FiEye } from 'react-icons/fi';
import axios from 'axios';

export default function FuncionariosAdminPage() {

  const [modalCriacaoAberto, setModalCriacaoAberto] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false);
  const [modalDeleteAberto, setModalDeleteAberto] = useState(false);
  const [listaFuncionarios, setFuncionarios] = useState([]);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);
  const [novoFuncionario, setNovoFuncionario] = useState({
    name: "",
    email: "",
    salario: "",
    aniversario: "",
    cargo: "",
  });

  async function deleteFuncionario() {
    try {
      const response = await fetch(`/api/funcionarios/${funcionarioSelecionado.id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      console.log(data);
      setFuncionarios(listaFuncionarios.filter(funcionario => funcionario.id !== funcionarioSelecionado.id));
      setModalDeleteAberto(false);
      await atualizarFuncionarios();
    } catch (error) {
      console.error(error);
    }
  }

async function adicionarFuncionario(e) {
  e.preventDefault();
  try {
    const response = await fetch("/api/funcionarios", {
      method: "POST",
      body: JSON.stringify(novoFuncionario),
    });
    const data = await response.json();
    setFuncionarios([...listaFuncionarios, data]);
    setModalCriacaoAberto(false);
    setNovoFuncionario({
      name: "",
      email: "",
      salario: "",
      aniversario: "",
      cargo: "",
    });
    await atualizarFuncionarios();
  } catch (error) {
    console.error(error);
  }
}
  
  
  
  
  
  

  const EditarFuncionario = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/funcionarios/${funcionarioSelecionado.id}`, funcionarioSelecionado);
      setModalEdicaoAberto(false);
      console.log("entroufpd")
    } catch (error) {
      console.error(error);
    }
  };
  const atualizarFuncionarios = async () => {
    const response = await fetch('/api/funcionarios');
    const data = await response.json();
    setFuncionarios(data.funcionarios);
  }

  useEffect(() => {
    async function fetchFuncionarios() {
      
      const response = await fetch('/api/funcionarios');
      const data = await response.json();
      setFuncionarios(data.funcionarios);
    }
    fetchFuncionarios();
  }, []);

  return (
    <>
      <div className='Titulopaginas'>Funcionários admin</div>
      <div className='botaoaddfuncionario'>
        <button onClick={() => setModalCriacaoAberto(true)}>Adicionar Funcionário</button>
      </div>
      <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Gerenciamento</th>
            </tr>
          </thead>
          <tbody>
            {listaFuncionarios.map((funcionario) => (
              <tr key={funcionario.id}>
                <td>{funcionario.id}</td>
                <td>{funcionario.name}</td>
                <td>{funcionario.email}</td>
                <td>
                <button onClick={() => {
  setFuncionarioSelecionado(funcionario);
  setModalDeleteAberto(true);
}}><FiTrash2 size={30} color="#AC9479" /></button>
                  <button onClick={() => {
  setFuncionarioSelecionado(funcionario);
  setModalEdicaoAberto(true);
}}><MdEdit size={30} color="#AC9479" /></button>
                  <button onClick={() => {setFuncionarioSelecionado(funcionario);setModalAberto(true);}}><FiEye size={30} color="#AC9479" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {modalAberto && (
          <div className="modal">
            <div className="modal-conteudo">
            <div className='Login_box login_boxfuncadmin'>
            <div className='LogoDoSite'>
                <NextImage src="/cloudservice.png" alt= 'Logo do Site' width={100} height={100} />
            </div>
            <div className='InputBoxesmodal'>
              <h2 className='viewmodal h2viewmodal' >{funcionarioSelecionado.name}</h2>
              <label >ID:</label>
              <p className='viewmodal'> {funcionarioSelecionado.id}</p>
              <label >Email:</label>
              <p className='viewmodal'> {funcionarioSelecionado.email}</p>
              <label >Salário:</label>
              <p className='viewmodal'> {funcionarioSelecionado.salario}</p>
              <label >Aniversário:</label>
              <p className='viewmodal'> {funcionarioSelecionado.aniversario}</p>
              <label >Cargo:</label>
              <p className='viewmodal'> {funcionarioSelecionado.cargo}</p>
              <button className='viewmodalbutton' onClick={() => setModalAberto(false)}>Fechar</button>
            </div>
            </div>
          </div>
          </div>
        )}
{modalEdicaoAberto && (
  <div className="modal">
    <div className="modal-conteudo">
    <div className='Login_box login_boxfuncadmin'>
    <div className='LogoDoSite'>
                <NextImage src='/cloudservice.png' alt= 'Logo do Site' width={100} height={100} />
            </div>
            <form onSubmit={EditarFuncionario}>
    <div className='InputBoxesmodal'>
      <div className='nomemodal modalprep'>
        <label>Nome:</label>
        <input type='text' name='name' value={funcionarioSelecionado?.name || ''} onChange={(event) => setFuncionarioSelecionado({ ...funcionarioSelecionado, name: event.target.value })} />
      </div>
      <div className='emailmodal modalprep'>
        <label>Email:</label>
        <input type='email' name='email' value={funcionarioSelecionado?.email || ''} onChange={(event) => setFuncionarioSelecionado({ ...funcionarioSelecionado, email: event.target.value })} />
      </div>
      <div className='salariomodal modalprep'>
        <label>Salário:</label>
        <input type='number' name='salario' value={funcionarioSelecionado?.salario || ''} onChange={(event) => setFuncionarioSelecionado({ ...funcionarioSelecionado, salario: event.target.value })} />
      </div>
      <div className='aniversariomodal modalprep'>
        <label>Aniversário:</label>
        <input type='text' name='aniversario' value={funcionarioSelecionado?.aniversario || ''} onChange={(event) => setFuncionarioSelecionado({ ...funcionarioSelecionado, aniversario: event.target.value })} />
      </div>
      <div className='cargomodal modalprep'>
        <label>Cargo:</label>
        <input type='text' name='cargo' value={funcionarioSelecionado?.cargo || ''} onChange={(event) => setFuncionarioSelecionado({ ...funcionarioSelecionado, cargo: event.target.value })} />
      </div>
      <div className='Botoes'>
        <button onClick={() => setModalEdicaoAberto(false)} className='Voltar'><a>Fechar</a></button>
        <button type='submit'><a>Editar</a></button>
      </div>
    </div>
  </form>
            </div>
    </div>
  </div>
)}
{modalDeleteAberto && (
  <div className="modal">
    <div className="modal-conteudo">
    <div className='Login_box login_boxfuncadmin'>
    <div className='LogoDoSite'>
                <NextImage src='/cloudservice.png' alt= 'Logo do Site' width={100} height={100} />
            </div>
            <form action='' method=''>
                <div className='InputBoxesmodal'>
                  <p className='confirmDelete'>Tem certeza que deseja deletar {funcionarioSelecionado.name}?</p>
                    <div className='Botoes'>
                    <button className='Voltar' onClick={() => setModalDeleteAberto(false)}>
  <a> Fechar </a>
</button> 
<button onClick={deleteFuncionario}>
  <a> Deletar </a>
</button>        
                    </div>
                </div>

            </form>
            </div>
    </div>
  </div>
)}

{modalCriacaoAberto && (
        <div className='modal'>
          <div className='modal-conteudo'>
            <div className='Login_box login_boxfuncadmin'>
              <div className='LogoDoSite'>
                <NextImage src='/cloudservice.png' alt='Logo do Site' width={100} height={100} />
              </div>
              <form onSubmit={adicionarFuncionario}>
  <div className="InputBoxesmodal">
    <div className="emailmodal modalprep">
      <label>Nome: </label>
      <input
        type="text"
        name="name"
        value={novoFuncionario.name}
        onChange={(e) =>
          setNovoFuncionario({
            ...novoFuncionario,
            name: e.target.value,
          })
        }
      />
    </div>
    <div className="emailmodal modalprep">
      <label>Email: </label>
      <input
        type="email"
        name="email"
        value={novoFuncionario.email}
        onChange={(e) =>
          setNovoFuncionario({
            ...novoFuncionario,
            email: e.target.value,
          })
        }
      />
    </div>
    <div className="salariomodal modalprep">
      <label>Salário:</label>
      <input
        type="number"
        name="salario"
        value={novoFuncionario.salario}
        onChange={(e) =>
          setNovoFuncionario({
            ...novoFuncionario,
            salario: e.target.value,
          })
        }
      />
    </div>
    <div className="aniversariomodal modalprep">
      <label>Aniversário:</label>
      <input
        type="text"
        name="aniversario"
        value={novoFuncionario.aniversario}
        onChange={(e) =>
          setNovoFuncionario({
            ...novoFuncionario,
            aniversario: e.target.value,
          })
        }
      />
    </div>
    <div className="cargomodal modalprep">
      <label>Cargo:</label>

      <input
        type="text"
        name="cargo"
        value={novoFuncionario.cargo}
        onChange={(e) =>
          setNovoFuncionario({
            ...novoFuncionario,
            cargo: e.target.value,
          })
        }
      />
    </div>
    <div className="Botoes">
      <button onClick={() => setModalCriacaoAberto(false)} className="Voltar">
        <a> Fechar </a>
      </button>
      <button type="submit">
        <a> Criar </a>
      </button>
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
import NextImage from 'next/image'
import { funcionarios as funcionariosData} from "../../../api.json";
import { MdEdit} from 'react-icons/md';
import { FiTrash2, FiEye } from 'react-icons/fi';
import { useState } from 'react';

interface Funcionario {
    id: number;
    name: string;
    email: string;
    salario: number;
    aniversario: string;
    cargo: string;


  }

  export function TabelaAdmin() {
    const [modalCriacaoAberto, setModalCriacaoAberto] = useState(false)
    const [novoFuncionario, setNovoFuncionario] = useState<Funcionario>({
      id: 0,
      name: '',
      email: '',
      salario: 0,
      aniversario: '',
      cargo: ''
    })
    const [modalAberto, setModalAberto] = useState(false);
    const [funcionarioSelecionado, FuncionarioSelecionado] = useState<Funcionario | null>(null);
    const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false);
    const [modalDelete, setModalDeleteAberto] = useState(false);
    const [funcionarios, setFuncionarios] = useState<Funcionario[]>(funcionariosData);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setNovoFuncionario(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const newId = Math.max(...funcionarios.map(funcionario => funcionario.id)) + 1;
      const newFuncionario: Funcionario = {
        ...novoFuncionario,
        id: newId
      };
      setFuncionarios([...funcionarios, newFuncionario]);
      setModalCriacaoAberto(false);
      setNovoFuncionario({
        id: 0,
        name: '',
        email: '',
        salario: 0,
        aniversario: '',
        cargo: ''
      });
    };

    const [funcionarioParaEdicao, setFuncionarioParaEdicao] = useState<Funcionario | null>(null);
  
    const ClickFiEye = (funcionario: Funcionario) => {
      FuncionarioSelecionado(funcionario);
      setModalAberto(true);
    };

    const ClickFiTrash2 = (funcionario: Funcionario) => {
      FuncionarioSelecionado(funcionario);
      setModalDeleteAberto(true);
    };

    const ClickMdEdit = (funcionario: Funcionario) => {
      setFuncionarioParaEdicao(funcionario);
      setModalEdicaoAberto(true);
    };

    const DeleteFuncionario = (id: number) => {
      const index = funcionarios.findIndex((funcionario) => funcionario.id === id);
      if (index !== -1) {
        const funcionariosAtualizados = [...funcionarios];
        funcionariosAtualizados.splice(index, 1);
        setFuncionarios(funcionariosAtualizados);
      }
    };

    const ClickAddFuncionario = () => {
      setModalCriacaoAberto(true)
    }

    const editFuncionario = (id: number, updatedFuncionario: Funcionario) => {
      const index = funcionarios.findIndex((funcionario) => funcionario.id === id);
      if (index !== -1) {
        const funcionariosAtualizados = [...funcionarios];
        funcionariosAtualizados[index] = updatedFuncionario;
        setFuncionarios(funcionariosAtualizados);
      }
      setModalEdicaoAberto(false);
      setFuncionarioParaEdicao(null);
    };

    const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFuncionarioParaEdicao(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    
    const handleEditSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (funcionarioParaEdicao) {
        editFuncionario(funcionarioParaEdicao.id, funcionarioParaEdicao);
      }
    };

    return (
      <>
            <div className='botaoaddfuncionario'>
        <button onClick={ClickAddFuncionario}> Adicionar Funcionario</button>
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
            {funcionarios.map((funcionario: Funcionario) => (
              <tr key={funcionario.id}>
                <td>{funcionario.id}</td>
                <td>{funcionario.name}</td>
                <td>{funcionario.email}</td>
                <td>
                  <button onClick={() => ClickFiTrash2(funcionario)}><FiTrash2 size={30} color="#AC9479" /></button>
                  <button onClick={() =>ClickMdEdit(funcionario)}><MdEdit size={30} color="#AC9479" /></button>
                  <button onClick={() => ClickFiEye(funcionario)}><FiEye size={30} color="#AC9479" /></button>
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
            <form onSubmit={handleEditSubmit}>
                <div className='InputBoxesmodal'>
                <div className='nomemodal modalprep'>

                <label>Nome: </label>
                <input type='text' name='name' value={funcionarioParaEdicao?.name ?? ''}
              onChange={handleEditChange}/>
                </div>
                  <div className='emailmodal modalprep'>

                    <label>Email: </label>
                    <input type='email' name='email'value={funcionarioParaEdicao?.email ?? ''}
              onChange={handleEditChange}/>
                  </div>
                  <div className='salariomodal modalprep'>
                      <label>Salário:</label>
                    <input type='number' name='salario'value={funcionarioParaEdicao?.salario ?? ''}
              onChange={handleEditChange}/>
                  </div>
                  <div className='aniversariomodal modalprep'>
                    <label>Aniversário:</label>
                    <input type='text' name='aniversario'value={funcionarioParaEdicao?.aniversario ?? ''}
              onChange={handleEditChange}/>
                  </div>
                  <div className='cargomodal modalprep'>

                    <label>Cargo:</label>
                    <input type='text' name='cargo' value={funcionarioParaEdicao?.cargo ?? ''}onChange={handleEditChange}/>
                  </div>
                    <div className='Botoes'>
                        <button onClick={() => setModalEdicaoAberto(false)}className='Voltar' ><a > Fechar </a></button>
                        <button type='submit'><a > Editar </a></button>
                    </div>
                </div>

            </form>
            </div>
    </div>
  </div>
)}
        {modalDelete && (
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
                    <button onClick={() => setModalDeleteAberto(false)}className='Voltar' ><a > Fechar </a></button> 
                    <button onClick={() => {DeleteFuncionario(funcionarioSelecionado.id);setModalDeleteAberto(false);}}><a > Deletar </a></button>          
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
    );
  }
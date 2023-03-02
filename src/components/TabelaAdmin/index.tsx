import NextImage from 'next/image'
import { funcionarios } from "../../../api.json";
import { FaTrash, FaEdit, FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit, MdVisibility } from 'react-icons/md';
import { FiTrash2, FiEdit2, FiEye } from 'react-icons/fi';

interface Funcionario {
    id: number;
    name: string;
    email: string;

  }
export function TabelaAdmin() {
  return (
<table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
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
            <td><button><FiTrash2 size={30} color="#AC9479" /></button><button><MdEdit size={30} color="#AC9479" /></button><button><FiEye size={30} color="#AC9479" /></button></td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
}
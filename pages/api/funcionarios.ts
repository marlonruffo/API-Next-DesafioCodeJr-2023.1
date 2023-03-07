import funcionariosData from '../../api.json';

export default function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(funcionariosData);
      console.log("func obtido")
      break;
    
    case 'POST':
      const newFuncionario = JSON.parse(body);
      const lastId = funcionariosData.funcionarios[funcionariosData.funcionarios.length - 1].id;
      console.log('func criado')
      newFuncionario.id = lastId + 1;
      funcionariosData.funcionarios.push(newFuncionario);
      res.status(201).json(newFuncionario);
      break;

    case 'PUT':
      const updatedFuncionario = JSON.parse(body);
      const indexToUpdate = funcionariosData.funcionarios.findIndex((funcionario) => funcionario.id === updatedFuncionario.id);
      console.log("func editado")
      if (indexToUpdate === -1) {
        res.status(404).json({ message: 'Funcionário não encontrado' });
        break;
      }
      funcionariosData.funcionarios[indexToUpdate] = updatedFuncionario;
      res.status(200).json(updatedFuncionario);
      break;

    case 'DELETE':
      console.log('marlon')
      const idToDelete = JSON.parse(body).id;
      const indexToDelete = funcionariosData.funcionarios.findIndex((funcionario) => funcionario.id === idToDelete);

      if (indexToDelete === -1) {
        res.status(404).json({ message: 'Funcionário não encontrado' });
        break;
      }
      const deletedFuncionario = funcionariosData.funcionarios.splice(indexToDelete, 1)[0];

      res.status(200).json(deletedFuncionario);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ message: `Método ${method} não permitido` });
      break;
  }
}
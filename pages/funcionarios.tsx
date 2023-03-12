import { CardFuncionario } from '../src/components/CardFuncionario'
import { useState, useEffect } from "react";
import axios from 'axios';
import { Navbar1 } from '../src/components/Navbar'
import { Footer1 } from '../src/components/Footer'

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
        <>
            <div className='navbarAllpages'>
                <Navbar1 nomeDoSite={'Cloud Service'} item1={'Home'} item2={'Contato'} item3={'Funcionários'} item4={'Login'} logo={'/logonav.png'} item1redireciona={'/'} item2redireciona={'/contato'} item3redireciona={'/funcionarios'} item4redireciona={'/login'} />
            </div>
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
            <div className='footerAllpages'>
                <Footer1 logoEmpresa={'/cloudservice.png'} escritaCentro1={'Italian Cuisine'} logoRedeSocial11={'/instagram.png'} logoRedeSocial22={'/facebook.png'} logoRedeSocial33={'/linkedin.png'} />
            </div>
        </>
    )
}
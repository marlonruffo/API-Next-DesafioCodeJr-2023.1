import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/login.css'
import '../styles/contato.css'
import '../styles/footer.css'
import '../styles/cardcomidaprincipal.css'
import '../styles/home.css'
import '../styles/apresentacao.css'
import '../styles/cardvertical.css'
import '../styles/localizacao.css'
import '../styles/pagcontatos.css'
import '../styles/cardfuncionario.css'
import '../styles/pagefunc.css'
import '../styles/tabela.css'
import { Navbar1 } from '../src/components/Navbar'
import { Footer1 } from '../src/components/Footer'


export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='navbarAllpages'>
      <Navbar1 nomeDoSite={'Cloud Service'} item1={'Home'} item2={'Contato'} item3={'Funcionários'} item4={'Login'} logo={'/logonav.png'} item1redireciona={'/'} item2redireciona={'/contato'} item3redireciona={'/funcionarios'} item4redireciona={'/login'}/>
      </div>
        
        <Component {...pageProps} />
        <div className='footerAllpages'>
        <Footer1 logoEmpresa={'/cloudservice.png'} escritaCentro1={'Italian Cuisine'} logoRedeSocial11={'/instagram.png'} logoRedeSocial22={'/facebook.png'} logoRedeSocial33={'/linkedin.png'} />
        </div>
        

    </>

  )
}

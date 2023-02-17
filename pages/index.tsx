import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Navbar1 } from '../src/components/Navbar'
import { Footer1 } from '../src/components/Footer'
import { CardComidaPrincipal1 } from '../src/components/CardComidaPrincipal'
import { CardComidaPrincipal2 } from '../src/components/CardComidaPrincipal'
import { Cardapresentacao } from '../src/components/Apresentacao'
import { CardVertical } from '../src/components/CardVertical'


const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <div className='PaginaInteira'>
        <Navbar1 nomeDoSite={'Cloud Service'} item1={'Home'} item2={'Contato'} item3={'Funcionários'} item4={'Login'} logo={'/logonav.png'}/>
        <Cardapresentacao foto={'/apresentacao1.jpg'} titulo={'Cloud Service Restaurant'} descricao={'Italian Cuisine'} textoInformacao={'O Cloud Service é um restaurante de massas de renome em Juiz de Fora. Oferece uma ampla seleção de massas com molhos variados e um ambiente acolhedor para desfrutar da refeição. Com uma equipe de renomados chefes, o Cloud Service é conhecido por sua qualidade e sabor. A fusão perfeita de culinária e ambiente faz do Cloud Service a escolha ideal para uma refeição inesquecível.'} />
        <h1 className='TitlesHome'>Pratos do dia</h1>
        <CardComidaPrincipal1 nomeDoPrato1={'Carbonara'} descricaoDoPrato1={'Spaghetti ao molho cremoso de ovo, queijo pecorino romano e bacon crocante. Uma receita clássica da culinária italiana que equilibra perfeitamente os sabores adocicados e salgados para um prato satisfatório.'} imagemDoPrato1={'/carbonara1.jpg'}/>
        <CardComidaPrincipal2 nomeDoPrato2={'La Pulcinella'} descricaoDoPrato2={'Spaghetti ao molho de tomate fresco e manjericão, acompanhado de camarões crocantes empanados e fritos. Um prato equilibrado e saboroso, perfeito para quem gosta de frutos do mar e combinações inusitadas.'} imagemDoPrato2={'/LaPulcinella.jpg'}/>
        <CardComidaPrincipal1 nomeDoPrato1={'Pizza'} descricaoDoPrato1={'Pizza gourmet feita com massa fina e crocante, recheada  com cogumelos frescos, presunto Parma, e queijos especiais. É um prato perfeito para quem gosta de experimentar novos sabores.'} imagemDoPrato1={'/pizza1.png'}/>
        <CardComidaPrincipal2 nomeDoPrato2={'Risoto'} descricaoDoPrato2={'Risoto cremoso de frutos do mar, feito com arroz arbóreo e um mix de frutos do mar,Finalizado com um toque de queijo parmesão e ervas frescas. É um prato perfeito para quem ama frutos do mar.'} imagemDoPrato2={'/risoto.jpg'}/>
        <h1 className='TitlesHome'>Bebidas</h1>
      <div className="CardverticalHome">
        <CardVertical imagem={'/vinhofig.jpg'} titulo={'Vinho'}/>
        <CardVertical imagem={'/refrigerante.png'} titulo={'Refrigerante'}/>
        <CardVertical imagem={'/drinks.png'} titulo={'Drinks'}/>

      </div>
      <h1 className='TitlesHome'>Sobremesas</h1>
      <div className="CardverticalHome">
      <CardVertical imagem={'/tiramisu.png'} titulo={'Tiramisù'}/>
      <CardVertical imagem={'/pannacotta.png'} titulo={'Panna cotta'}/>

      </div>


      <Footer1 logoEmpresa={'/cloudservice.png'} escritaCentro1={'Italian Cuisine'} logoRedeSocial11={'/instagram.png'} logoRedeSocial22={'/facebook.png'} logoRedeSocial33={'/linkedin.png'} />
  
    </div>

  )
}

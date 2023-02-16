import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Navbar1 } from '../src/components/Navbar'
import { Footer1 } from '../src/components/Footer'
import { CardComidaPrincipal1 } from '../src/components/CardComidaPrincipal'
import { CardComidaPrincipal2 } from '../src/components/CardComidaPrincipal'
import { Cardapresentacao } from '../src/components/Apresentacao'
import { Cardbebidas } from '../src/components/CardBebida'


const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <div className='PaginaInteira'>
        <Navbar1 NomeDoSite={'Cloud Service'} Item1={'Home'} Item2={'Contato'} Item3={'Funcionários'} Item4={'Login'} Logo={'/logonav.png'}/>
        <Cardapresentacao/>
        <h1 className='TitlesHome'>Pratos do dia</h1>
        <CardComidaPrincipal1 NomeDoPrato1={'Carbonara'} DescricaoDoPrato1={'Spaghetti ao molho cremoso de ovo, queijo pecorino romano e bacon crocante. Uma receita clássica da culinária italiana que equilibra perfeitamente os sabores adocicados e salgados para um prato satisfatório.'} ImagemDoPrato1={'/carbonara1.jpg'}/>
        <CardComidaPrincipal2 NomeDoPrato2={'La Pulcinella'} DescricaoDoPrato2={'Spaghetti ao molho de tomate fresco e manjericão, acompanhado de camarões crocantes empanados e fritos. Um prato equilibrado e saboroso, perfeito para quem gosta de frutos do mar e combinações inusitadas.'} ImagemDoPrato2={'/LaPulcinella.jpg'}/>
        <CardComidaPrincipal1 NomeDoPrato1={'Pizza'} DescricaoDoPrato1={'Pizza gourmet feita com massa fina e crocante, recheada  com cogumelos frescos, presunto Parma, e queijos especiais. É um prato perfeito para quem gosta de experimentar novos sabores.'} ImagemDoPrato1={'/pizza1.png'}/>
        <CardComidaPrincipal2 NomeDoPrato2={'Risoto'} DescricaoDoPrato2={'Risoto cremoso de frutos do mar, feito com arroz arbóreo e um mix de frutos do mar,Finalizado com um toque de queijo parmesão e ervas frescas. É um prato perfeito para quem ama frutos do mar.'} ImagemDoPrato2={'/risoto.jpg'}/>
        <h1 className='TitlesHome'>Bebidas</h1>
      <div className="BebidasHome">
        <Cardbebidas imagem={'/vinhofig.jpg'} titulo={'Vinho'}/>
        <Cardbebidas imagem={'/refrigerante.png'} titulo={'Refrigerante'}/>
        <Cardbebidas imagem={'/drinks.png'} titulo={'Drinks'}/>

      </div>
      <Footer1 LogoEmpresa={'/cloudservice.png'} EscritaCentro={'Italian Cuisine'} LogoRedeSocial1={'/instagram.png'} LogoRedeSocial2={'/facebook.png'} LogoRedeSocial3={'/linkedin.png'} />
  
    </div>

  )
}

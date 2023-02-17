import Head from 'next/head'
import Image from 'next/image'
import { Cardapresentacao } from '../src/components/Apresentacao'

export default function Apresentacaopage() {
    return (
      <div>
        <Cardapresentacao foto={'/apresentacao1.jpg'} titulo={'Cloud Service Restaurant'} descricao={'Italian Cuisine'} textoInformacao={'O Cloud Service é um restaurante de massas de renome em Juiz de Fora. Oferece uma ampla seleção de massas com molhos variados e um ambiente acolhedor para desfrutar da refeição. Com uma equipe de renomados chefes, o Cloud Service é conhecido por sua qualidade e sabor. A fusão perfeita de culinária e ambiente faz do Cloud Service a escolha ideal para uma refeição inesquecível.'} />
      </div>

    )
  }


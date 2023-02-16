import NextImage from 'next/image'

export function Cardapresentacao(){
    return(
        <div className="apresentacao-container">
            <div className="apresentacao-esq" >
            <NextImage src="/apresentacao1.jpg" alt="Vinho" width={600} height={558} />
                
                
                
            </div>
            <div className="apresentacao-dir">
                <h1>Cloud Service Restaurant</h1>
                <h2>Italian Cuisine</h2>
                <p>O Cloud Service é um restaurante de massas de renome em Juiz de Fora. Oferece uma ampla seleção de massas com molhos variados 
                    e um ambiente acolhedor para desfrutar da refeição. Com uma equipe de renomados chefes, o Cloud Service é conhecido por sua qualidade e sabor. A fusão perfeita de culinária e ambiente faz do Cloud Service a escolha ideal para uma refeição inesquecível.</p>
            </div>

        </div>
    )
}
import NextImage from 'next/image'
interface CardLocalizacaoProps {
    endereco: string;
}
export function CardLocalizacao({ endereco }: CardLocalizacaoProps) {
    return (

        <div className="Cartaoloc-container">
            <div className="Cartaolocalizacao">
                <h1 className='Textocartaoredes'>Localização</h1>
                <NextImage src={'/loc.png'} alt={'localizacao pin'} width={'60'} height={'60'} />
                <p className="enderecoloc">{endereco}</p>
            </div>
        </div>
    )
}
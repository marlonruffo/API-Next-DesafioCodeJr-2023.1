import NextImage from 'next/image'

interface CardBebidaProps {
    imagem: string;
    titulo: string;
}
export function CardVertical({imagem, titulo}: CardBebidaProps) {
    return(
            <div className="bebida-container">
            <div className="bebida1 bebidas" >
            <NextImage src={imagem} alt="Vinho" width={300} height={400} />
                    <h1>{titulo}</h1>
            </div>
        </div>
    )
}
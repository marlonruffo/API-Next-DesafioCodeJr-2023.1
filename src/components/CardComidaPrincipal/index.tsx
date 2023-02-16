import NextImage from 'next/image'
interface CardComidaPrincipalProps1 {
    NomeDoPrato1: string;
    DescricaoDoPrato1: string;
    ImagemDoPrato1: string;

}

interface CardComidaPrincipalProps2 {
    NomeDoPrato2: string;
    DescricaoDoPrato2: string;
    ImagemDoPrato2: string;

}
/*Imagem a esquerda e texto a direita*/
export function CardComidaPrincipal1({NomeDoPrato1, DescricaoDoPrato1, ImagemDoPrato1}: CardComidaPrincipalProps1){
    return(
        <div className='card-container'>
            <div className="card-1"> 
                <div className="card-image-1">
                    <NextImage src={ImagemDoPrato1} alt="Imagem do Prato" width={400} height={200} />
                </div>
                <div className='card-text-1'>
                    <h2>{NomeDoPrato1}</h2>
                    <p>{DescricaoDoPrato1}</p>
                </div>

            </div> 
        </div>
    )
}



/*Imagem a direita e texto a esquerda*/
export function CardComidaPrincipal2({NomeDoPrato2, DescricaoDoPrato2, ImagemDoPrato2}: CardComidaPrincipalProps2){
    return(
        <div className='card-container'>
            <div className="card-2"> 
                <div className="card-image-2">
                    <NextImage src={ImagemDoPrato2} alt="Imagem do Prato" width={400} height={200} />
                </div>
                <div className='card-text-2'>
                    <h2>{NomeDoPrato2}</h2>
                    <p>{DescricaoDoPrato2}</p>
                </div>

            </div> 
        </div>
    )
}
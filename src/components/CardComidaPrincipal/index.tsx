import NextImage from 'next/image'
interface CardComidaPrincipalProps1 {
    nomeDoPrato1: string;
    descricaoDoPrato1: string;
    imagemDoPrato1: string;
}
interface CardComidaPrincipalProps2 {
    nomeDoPrato2: string;
    descricaoDoPrato2: string;
    imagemDoPrato2: string;

}
/*Imagem a esquerda e texto a direita*/
export function CardComidaPrincipal1({nomeDoPrato1, descricaoDoPrato1, imagemDoPrato1}: CardComidaPrincipalProps1){
    return(
        <div className='card-container'>
            <div className="card-1"> 
                <div className="card-image-1">
                    <NextImage src={imagemDoPrato1} alt="Imagem do Prato" width={400} height={200} />
                </div>
                <div className='card-text-1'>
                    <h2>{nomeDoPrato1}</h2>
                    <p>{descricaoDoPrato1}</p>
                </div>

            </div> 
        </div>
    )
}

/*Imagem a direita e texto a esquerda*/
export function CardComidaPrincipal2({nomeDoPrato2, descricaoDoPrato2, imagemDoPrato2}: CardComidaPrincipalProps2){
    return(
        <div className='card-container'>
            <div className="card-2"> 
                <div className="card-image-2">
                    <NextImage src={imagemDoPrato2} alt="Imagem do Prato" width={400} height={200} />
                </div>
                <div className='card-text-2'>
                    <h2>{nomeDoPrato2}</h2>
                    <p>{descricaoDoPrato2}</p>
                </div>

            </div> 
        </div>
    )
}
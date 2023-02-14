import NextImage from 'next/image'
interface CardContato1Props{
    Titulo: string;
    Imagem1:string;
    Imagem2:string;
    Imagem3:string;
    Imagem4:string;
    LabelImagem1:string;
    LabelImagem2:string;
    LabelImagem3:string;
    LabelImagem4:string;

}
export function CardContato1({Titulo,Imagem1,Imagem2,Imagem3,Imagem4,LabelImagem1,LabelImagem2,LabelImagem3,LabelImagem4}:CardContato1Props){
    return(
        <div className='ContatoRedesBox'>
            <h1>{Titulo}</h1>
               <div className='RedesSociais'>
                <div className='titulocontato'>
                    <NextImage  src={Imagem1} alt='Logo Rede Social' width={80} height={80} />
                    <p>{LabelImagem1}</p>
                </div>
                <div className='titulocontato'>
                    <NextImage  src={Imagem2} alt='Logo Rede Social' width={80} height={80} />
                    <p>{LabelImagem2}</p>
                </div>
                <div className='titulocontato'>
                    <NextImage  src={Imagem3} alt='Logo Rede Social' width={80} height={80} />
                    <p>{LabelImagem3}</p>
                </div>
                <div className='titulocontato'>
                    <NextImage  src={Imagem4} alt='Logo Rede Social' width={80} height={80} />
                    <p>{LabelImagem4}</p>
                </div>
               </div>

         </div>
    )
}
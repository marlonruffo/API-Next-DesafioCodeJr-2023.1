import NextImage from 'next/image'
interface CardContatoProps{
    titulo: string;
    userInstagram:string;
    userFacebook:string;
    userLinkedin:string;
}
export function CardContato1({titulo,userInstagram,userFacebook,userLinkedin}:CardContatoProps){
    return(
        <div className='Cartaoinfo-container'>

        <div className='Cartaoredessociais'>
            <h1 className='Textocartaoredes'>{titulo}</h1>
            <div className='instagraminfo'>
                <NextImage src={'/instagram.png'} alt={'userInstagram'} width={70} height={70} />
                <p className='usuario'>CloudRestaurant</p>
            </div>
            <div className='facebookinfo'>
                <NextImage src={'/facebook.png'} alt={'userFacebook'} width={70} height={70} />
                <p className='usuario'>CloudRestaurant</p>
            </div>
            <div className='linkedininfo'>
                <NextImage src={'/linkedin.png'} alt={'userLinkedin'} width={70} height={70} />
                <p className='usuario'>CloudRestaurant</p>
            </div>
            
            

         </div>
        </div>
    )
}
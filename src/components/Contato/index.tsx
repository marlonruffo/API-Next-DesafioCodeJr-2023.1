import NextImage from 'next/image'
interface CardContatoProps {

    userInstagram: string;
    userFacebook: string;
    userEmail: string;
}
export function CardContato1({ userInstagram, userFacebook, userEmail }: CardContatoProps) {
    return (

        <div className="Cartaoloc-container">
            <div className="Cartaolocalizacao">
                <h1 className='Textocartaoredes'>Entre em contato com a gente</h1>
                <div className='userinf'>

                    <div className='instagraminfo '>
                        <NextImage src={'/instagram.png'} alt={'userInstagram'} width={70} height={70} />
                        <p className='usuario'>{userInstagram}</p>
                    </div>
                    <div className='facebookinfo '>
                        <NextImage src={'/facebook.png'} alt={'userFacebook'} width={70} height={70} />
                        <p className='usuario'>{userFacebook}</p>
                    </div>
                    <div className='gmailinfo '>
                        <NextImage src={'/gmail.png'} alt={'email'} width={70} height={70} />
                        <p className='usuario'>{userEmail}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}



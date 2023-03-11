import NextImage from 'next/image'
interface FooterProps {
    logoEmpresa: string;
    escritaCentro1:string;
    logoRedeSocial11?:string;
    logoRedeSocial22?:string;
    logoRedeSocial33?:string;
}
export function Footer1({logoEmpresa, escritaCentro1, logoRedeSocial11, logoRedeSocial22, logoRedeSocial33}:FooterProps){
    return(
        <footer>
            <div className="logofooter">
                <NextImage src={logoEmpresa} alt="Logo da empresa" width={100} height={100} />
            </div>
            <div className='EscritaCentro'>
                <h1>{escritaCentro1}</h1>
            </div>
            <div className='Logos-sociais'>
            <NextImage className= "logoRedeSocial1 logos" src={logoRedeSocial11} alt="Logo da empresa" width={40} height={40} />
            <NextImage className= "logoRedeSocial2 logos" src={logoRedeSocial22} alt="Logo da empresa" width={40} height={40} />
            <NextImage className= "logoRedeSocial3 logos" src={logoRedeSocial33} alt="Logo da empresa" width={40} height={40} />
            
            </div>
        </footer>


    )
}
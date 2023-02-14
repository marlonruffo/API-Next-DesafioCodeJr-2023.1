import NextImage from 'next/image'
interface FooterProps {
    LogoEmpresa: string;
    EscritaCentro:string;
    LogoRedeSocial1?:string;
    LogoRedeSocial2?:string;
    LogoRedeSocial3?:string;


}
export function Footer1({LogoEmpresa, EscritaCentro, LogoRedeSocial1, LogoRedeSocial2, LogoRedeSocial3}:FooterProps){
    return(
        <footer>
            <div className="logofooter">
                <NextImage src={LogoEmpresa} alt="Logo da empresa" width={100} height={100} />
            </div>
            <div className='EscritaCentro'>
                <h1>{EscritaCentro}</h1>
            </div>
            <div className='Logos-sociais'>
            <NextImage className= "logoRedeSocial1 logos" src={LogoRedeSocial1} alt="Logo da empresa" width={40} height={40} />
            <NextImage className= "logoRedeSocial2 logos" src={LogoRedeSocial2} alt="Logo da empresa" width={40} height={40} />
            <NextImage className= "logoRedeSocial3 logos" src={LogoRedeSocial3} alt="Logo da empresa" width={40} height={40} />
            
            </div>
        </footer>


    )
}
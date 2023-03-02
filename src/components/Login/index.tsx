import { redirect } from 'next/dist/server/api-utils';
import NextImage from 'next/image'

interface LoginBoxProps {
    logo: string;
    input1:string;
    input2:string;
    botao1:string;
    botao2:string;
    typeInput1: string;
    typeInput2: string;
    redirect1: string;
    redirect2: string;
}	


export function LoginBox({logo, input1, input2, botao1, botao2, typeInput1, typeInput2, redirect1, redirect2}:LoginBoxProps) {
    return(
        
        <div className='Login_box'>
            <div className='LogoDoSite'>
                <NextImage src={logo} alt= 'Logo do Site' width={100} height={100} />
            </div>
            <form action='' method=''>
                <div className='InputBoxes'>
                    <label>{input1} </label>
                    <input type={typeInput1} name={typeInput1}/>
                    <label>{input2}</label>
                    <input type={typeInput2} name={typeInput2}/>
                    <div className='Botoes'>
                        <button className='Voltar' ><a href={redirect1}> {botao1} </a></button>
                        <button ><a href={redirect2}> {botao2} </a></button>
                    </div>
                </div>

            </form>
        </div>
    )
}
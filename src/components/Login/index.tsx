import NextImage from 'next/image'

interface LoginBoxProps {
    logo: string;
    Input1:string;
    Input2:string;
    Botao1:string;
    Botao2:string;
    typeInput1: string;
    typeInput2: string;
}	


export function LoginBox({logo, Input1, Input2, Botao1, Botao2, typeInput1, typeInput2}:LoginBoxProps) {
    return(
        
        <div className='Login_box'>
            <div className='LogoDoSite'>
                <NextImage src={logo} alt= 'Logo do Site' width={100} height={100} />
            </div>
            <form action='' method=''>
                <div className='InputBoxes'>
                    <label>{Input1} </label>
                    <input type={typeInput1} name={typeInput1}/>
                    <label>{Input2}</label>
                    <input type={typeInput2} name={typeInput2}/>
                    <div className='Botoes'>
                        <button className='Voltar'>{Botao1}</button>
                        <button type='submit'>{Botao2}</button>
                    </div>
                </div>

            </form>
        </div>
    )
}
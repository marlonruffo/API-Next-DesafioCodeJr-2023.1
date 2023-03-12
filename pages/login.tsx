import { LoginBox } from '../src/components/Login'


export default function LoginPage() {
  return (
    <>
      <div className='Titulopaginas'>Login</div>
      <div className='Loginall'>
        <LoginBox input1={'Email'} input2={'Senha'} botao1={'Voltar'} botao2={'Entrar'} logo={'/cloudservice.png'} typeInput1={'email'} typeInput2={'password'} redirect1={'/'} redirect2={'/funcionariosadmin'} />
      </div>
    </>
  )
}

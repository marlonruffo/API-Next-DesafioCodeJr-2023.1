import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { LoginBox } from '../src/components/Login'



const inter = Inter({ subsets: ['latin'] })

export default function LoginPage() {
  return (
    <LoginBox input1={'Email'} input2={'Senha'} botao1={'Voltar'} botao2={'Entrar'} logo={'/cloudservice.png'} typeInput1={'email'} typeInput2={'password'}/>

    
  )
}

import NextImage from 'next/image'
interface CardLocalizacaoProps{
endereco: string;
}
export function CardFuncionario(){
    return(

        <div className="Funcionario">
            <div className='Nomedofuncionario func'>
                <label>Nome:</label>
                <p>Marlon Ruffo Nascimento</p>
            </div>
            <div className='Emaildofuncionario func'>
                <label>Email:</label>
                <p>fernando.giardini@codejr.com.br</p>
            </div>
            <div className='Aniversariodofuncionario func'>
                <label>Aniversário:</label>
                <p>05/06/2001</p>
            </div>
            <div className='Cargodofuncionario func'>
                <label>Cargo:</label>
                <p>Assessor</p>
            </div>

        </div>
    )
}
import React, { useState, useEffect } from 'react';
interface CardFuncionarioProps {
    key: number;
    name: string;
    email: string;
    aniversario: string;
    cargo: string;
    salario: number;
}
export function CardFuncionario({ name, email, aniversario, cargo, salario }: CardFuncionarioProps) {

    return (

        <div className="Funcionario">
            <div className='Nomedofuncionario func'>
                <label>Nome:</label>
                <p>{name}</p>
            </div>
            <div className='Emaildofuncionario func'>
                <label>Email:</label>
                <p>{email}</p>
            </div>
            <div className='Aniversariodofuncionario func'>
                <label>Aniversário:</label>
                <p>{aniversario}</p>
            </div>
            <div className='Cargodofuncionario func'>
                <label>Cargo:</label>
                <p>{cargo}</p>
            </div>
            <div className='Salariodofuncionario func'>
                <label>Salário:</label>
                <p>{salario}</p>
            </div>

        </div>
    )
}
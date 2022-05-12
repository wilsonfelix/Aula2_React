import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

export default function RegisterForm() {

    //criando variaveis no state do componente utilizando REACT HOOKS
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    //criando um formulário utilizando o REACT HOOK FORMS
    const {
        control, //capturar os campos do formulário
        handleSubmit, //capturar o evento SUBMIT do formulário
        formState: {
            errors //erros de validação do formulário
        },
        reset //limpar os campos do formulário
    } = useForm();

    //função executada no SUBMIT do formulário
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }


    //renderizar o conteudo HTML do componente
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label>Nome do usuário:</label>
                    <Controller
                        control={control}
                        name="nome"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="text"
                                    placeholder='Ex: Wilson Félix de Andrade Júnior'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
                </div>
                <div className='col-md-6'>
                    <label>Email de acesso:</label>
                    <Controller
                        control={control}
                        name="email"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="email"
                                    placeholder='Ex: wilson.felix.jr@gmail.com'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label>Senha de acesso:</label>
                    <Controller
                        control={control}
                        name="senha"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="password"
                                    placeholder='Digite aqui sua senha'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
                </div>
                <div className='col-md-6'>
                    <label>Confirme a senha:</label>
                    <Controller
                        control={control}
                        name="senhaConfirmacao"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="password"
                                    placeholder='Confirme sua senha'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-md-12'>

                    <input type="submit" value="Realizar Cadastro"
                        className='btn btn-light btn-outline-primary' />
                </div>
            </div>

        </form>
    )

}

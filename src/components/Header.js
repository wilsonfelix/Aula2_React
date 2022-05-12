import React from 'react';
import { NavLink } from 'react-router-dom';

//declara o componente utilizando sintaxe de função
export default function Header() {
    //retornar o conteudo HTML renderizado pelo componente
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src="https://www.freelogoservices.com/blog/wp-content/uploads/transparent-logo.jpg" width="50" height="50" alt="" /><h4 class="d-flex justify-content-center">WFA</h4></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <NavLink className="nav-link link-light" aria-current="page" to="/">Acessar conta</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link link-light" aria-current="page" to="/criar-conta">Criar conta de usuário</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link link-light" aria-current="page" to="/esqueci-minha-senha">Esqueci minha senha</NavLink>
                            </li>
                        </ul>
                        <form class="d-flex navbar-nav ms-auto">

                            <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                            <button className="btn btn-light btn-outline-primary" type="submit">Pesquisar</button>

                        </form>
                    </div>
                </div>
            </nav>
        </div>

    )
}   
import './header.css';
import{useNavigate} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import api from "../../services/api";

const Header = () =>
{
    
    const navigate = useNavigate();
    const [Nivel_Acesso, setNivel_Acesso] = useState('');
    const [dadosLogin, setdadosLogin] = useState(false);
    useEffect(() => {
        dadosToken();
    }, [!dadosLogin]);

    async function dadosToken(){
        var JWTToken = await localStorage.getItem("Token")
        console.log(JWTToken);
        const config = {
            headers: { Authorization: `Bearer ${JWTToken}` }
        };

        await api.get("/pessoa/token", config)
        .then((response) => {
            setNivel_Acesso(response.data.nivel_acesso);
            console.log(Nivel_Acesso)
            setdadosLogin(true);
        })
        .catch((err) => {
            console.log(err)
        });
       
    }

    const handleParametrizacao = (event) =>{

        event.preventDefault();
        let quantidade;
        api.get("/parametrizacao/count",{

        }).then((response) =>{
            quantidade = response.data.quantidade
            if(quantidade === 0){
                navigate('/parametrizacaocriar')
            }else {
                navigate('/parametrizacaoalterar')
            }

            console.log(quantidade);
        });





    }

    const handleImovel = (event) =>{
        event.preventDefault();
        navigate('/imovel');
    }

    const handleLogin = (event)=>{
        event.preventDefault();
        localStorage.setItem("Token", "");
        navigate('/');
    }

    return(
        <header className='header'>
            <section className='logo'>
                <img src='https://media.discordapp.net/attachments/429862771866206209/1110289070476775445/Screenshot_3.png' alt="LogoEmpresa"></img>
            </section>
            <section>
                <ul>{ Nivel_Acesso === '3' ?
                    <li>
                        <button onClick={handleParametrizacao} className='botao'>PARAMETRIZAÇÃO</button>
                    </li> : <></>}
                    { Nivel_Acesso === '3' ?
                    <li>
                        <p>|</p>
                    </li> : <></>}
                    <li>
                        <button onClick className='botao'>CORRETORES</button>    
                    </li>
                    <li>
                        <p>|</p>
                    </li>
                    <li>                       
                        <button onClick className='botao'>CLIENTES</button>                        
                    </li>
                    <li>
                        <p>|</p>
                    </li>
                    <li> 
                        <button onClick={handleImovel} className='botao'>IMÓVEIS</button>                       
                    </li>
                    <li>
                        <p>|</p>
                    </li>
                    <li>
                        <button onClick={handleLogin} className='botao'>SAIR</button>   
                    </li>
                    
                </ul>
            </section>
        </header>
    );
}

export default Header;
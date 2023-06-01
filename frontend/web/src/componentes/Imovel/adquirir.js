import './adquirir.css';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import IntlCurrencyInput from "react-intl-currency-input"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Adquirir = () =>{
    const { id } = useParams();
  const [imovel, setImovel] = useState();
  const [endereco, setEndereco] = useState();
  const [imagem, setImagem] = useState();
  const [dadosCarregados, setDadosCarregados] = useState(false);
  const navigate = useNavigate()


  const currencyConfig = {
    locale: "pt-BR",
    formats: {
      number: {
        BRL: {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/imoveis/${id}`);
        const imovelData = response.data;

        const responseEndereco = await axios.get(`http://localhost:8000/enderecos/${imovelData.endereco_id}`);
        const enderecoData = responseEndereco.data;

        const responseImagem = await axios.get(`http://localhost:8000/fotos/${imovelData.fotos_id}`);
        const imagemData = responseImagem.data;

        setImovel(imovelData);
        setEndereco(enderecoData);
        setImagem(imagemData);
        setDadosCarregados(true);
        console.log(imovelData.descricao);
      } catch (error) {
        console.error(error);
        alert('Erro Interno');
      }
    };

    fetchData();
  }, []);

  const handleDescricaoChange = (event) => {
    const { name, value } = event.target;
    setImovel((prevImovel) => ({
      ...prevImovel,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    console.log(imovel.descricao);
    event.preventDefault();
    console.log(imovel.descricao)
    axios.put(`http://localhost:8000/imoveis/${id}`, imovel)
    .then(()=>{
        navigate('/imovel');
    })
    .catch((error)=>{
        alert(error);
    })
    
    
  };

  if (!dadosCarregados) {
    return (
      <div>
        <Header />
        <p className='carregando'>Carregando...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className='tela'>
        <div className='formulario'>
        <img src={imagem.url} alt='imovel'></img>
        <div className='endereco'>
        <h4>{endereco.logradouro}</h4>
        <p>{endereco.bairro}, {endereco.cidade}</p>
        </div>
        <form onSubmit={handleSubmit}>
        <br />
        <label>Descrição</label>
        <div className='inputs' name='descricao'>{imovel.descricao}</div>
        <br /><br />
        <label>
            Valor
            <div currency="BRL" config={currencyConfig} className='inputs' name="valor">{imovel.valor}</div>
            </label>         
        <br /> <br />
        <label>
            Valor minimo
            <div currency="BRL" config={currencyConfig} className='inputs' name="valorminimo">{imovel.valor_minimo}</div>
            </label>        
        <br /> <br />
        <button type='submit' className='botaoA'>Confirmar</button>
        </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Adquirir;
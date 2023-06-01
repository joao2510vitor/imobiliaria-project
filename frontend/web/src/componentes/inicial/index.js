import { useState,useEffect } from 'react';
import './inicial.css'
import axios from 'axios';
import HeaderIni from './headerIni';
import Box from './box';
import Footer from '../Footer';

const Inicial = () =>{

    const [imoveis,setImoveis] = useState([]);
    const [dadosCarregados,setDadosCarregados] = useState(false);
    const [enderecos,setEnderecos] = useState([]);
    const [fotos,setFotos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8000/imoveis');
            const imoveisData = response.data;
      
            const enderecoPromises = imoveisData.map((imovel) => {
              return axios.get(`http://localhost:8000/enderecos/${imovel.endereco_id}`);
            });
      
            const enderecoResponses = await Promise.all(enderecoPromises);
            const enderecosData = enderecoResponses.map((response) => response.data);
      
            const imagensPromises = imoveisData.map((imovel) => {
              return axios.get(`http://localhost:8000/fotos/${imovel.fotos_id}`);
            });
      
            const imagensResponses = await Promise.all(imagensPromises);
            const imagensData = imagensResponses.map((response) => response.data);
      
            setImoveis(imoveisData);
            setEnderecos(enderecosData);
            setFotos(imagensData);
            setDadosCarregados(true);
          } catch (error) {
            console.error(error);
            alert('Erro Interno');
          }
        };
      
        fetchData();
      }, []);



      if(!dadosCarregados) {
        return(
            <div>
                <p className='carregando'>Carregando...</p>
            </div>
            
        ) 
      }

    return (
        <div className='conteinerInicial'>
            <HeaderIni/>
            <div>
              <ul className='listaImov'>
                {
                  imoveis.map((imovel,index) =>(
                    <li key={index}>
                        <Box id={imovel.id} imageSrc={fotos[index].url} endereco={enderecos[index]} valor={imovel.valor} descricao={imovel.descricao} tipo={imovel.tipo}/>
                      </li>
                  ))
                }
              </ul>
            </div>
            <Footer/>
        </div>
    );
}

export default Inicial;
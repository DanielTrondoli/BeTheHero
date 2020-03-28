import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Service from '../../services/api';

import logoImage from '../../assets/logo.svg';
import './styles.css';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    
    const History = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleInsertIncident(e){
        e.preventDefault();

        const data={
            title,
            description,
            value,
        }

        try {
            await Service.post('incidents',data, {
                headers:{
                    Authorization: ongId,
                }
            });

            History.push('/profile');

        } catch (error) {
            alert(error);
            
        }
    }

    return(
        <div className="newIncident-conteiner">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>                    

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size = {16} color="#E020401"/>
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleInsertIncident}>
                    <input 
                        placeholder="Titulo do Caso" 
                        value={title}
                        onChange={e=>setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em Reais"
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )

}
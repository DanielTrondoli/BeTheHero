import React, {useState} from 'react'
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import Service from '../../services/api';

import './styles.css';

import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

export default function Logon(){
    const[id,setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const resp = await Service.post('sessions', {id});

            console.log('sucesso');

            localStorage.setItem("ongId",id);
            localStorage.setItem("ongName",resp.data.name);

            history.push('/profile');

        } catch (error) {
            alert('Insira um id Valido');
        }

    }

    return(
        <div className="logon-conteiner">
            <section className="form">
                <img src={logoImage} alt="Be The Hero" />
            <form onSubmit={handleLogin}>
                <h1>Faça seu Logon</h1>
                <input 
                    placeholder="Seu ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register"> 
                    <FiLogIn size={16} color='#E02041'/>
                    Não tenho cadastro
                </Link>
            </form>
            </section>
            <img src={heroesImage} alt="Heroes" />
        </div>
    );
}
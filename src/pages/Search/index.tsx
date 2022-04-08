import './styles.css';

import ResultCard from 'components/ResultCard';
import React, { useState } from 'react';
import axios from 'axios';

type FormData = {
    perfil: string;
}

type User = {
    "avatar_url": string;
    "html_url": string;
    "followers": string;
    "location": string;
    "name": string;
}
  

function Search(){
    const [formData, setFormData] = useState<FormData>({
        perfil: ''
    })
    
    const [user, setUser] = useState<User>();
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setFormData( { ...formData, [name]:value } )
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        axios.get(`https://api.github.com/users/${formData.perfil}`)
        .then((response) => {
            setUser(response.data);
        })
        .catch((error) => {
            setUser(undefined);
            console.log(error);
        });
    }
    
    return (
        <div className="api-search-container">
            <div className="container search-container">
                <h1>Encontre um perfil no Github</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <input type="text" name="perfil" value={formData.perfil} className="search-input" placeholder=" Usuário Github" onChange={handleChange} />
                        <button type="submit" className="btn search-button">Encontrar</button>
                    </div>
                </form>
    
                {user &&
                    <>
                        <div className='user-container'>
                            <div className='user-avatar'>
                                <img src={user.avatar_url} alt="Foto de perfil" />
                            </div>
                            <div className='user-details'>
                                <h4>Informações</h4>
                                <ResultCard title="Perfil:" description={user.html_url} />
                                <ResultCard title="Seguidores:" description={user.followers} />
                                <ResultCard title="Localidade:" description={user.location} />
                                <ResultCard title="Nome:" description={user.name} />
                            </div>
                        </div>
                    </>
                }

            </div>
        </div>
    );
}

export default Search;
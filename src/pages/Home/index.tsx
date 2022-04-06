import { Link } from 'react-router-dom';

import './styles.css';

function Home(){
    return(
        <div className="home-container">
            <h1 className='txt-home-h1'>Desafio Github API</h1>
            <h3 className='txt-home-h3'>Bootcamp Spring React - DevSuperior</h3>
            <Link to="/">
                <button className="btn btn-lg start-button">Começar</button>
            </Link>
        </div>
    );
}

export default Home;
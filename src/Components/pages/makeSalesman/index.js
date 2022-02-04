import React, {useState} from 'react';
import {SalesmanArea} from './styled';
import api from '../../services/api';

const MakeSalesman = () => {

const [ name, setName] = useState('');
const [ email, setEmail] = useState('');

const handleMakeSalesman = () => {
    api.post("/",{
        name,
        email
  });
}

    return(
        <SalesmanArea>
            <div className='area--salesman'>
                <h2>Adicione um vendedor</h2>
                <form action='POST'>
                    <div className='salesman--input'>
                        <input 
                            type='text'
                            placeholder='Nome do vendedor'
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='Email do vendedor'
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='salesman--button'>
                        <button onClick={handleMakeSalesman}>Adicionar</button>
                    </div>
                </form>
            </div>
        </SalesmanArea>
    );
}

export default MakeSalesman;
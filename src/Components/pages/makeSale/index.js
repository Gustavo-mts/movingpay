import React, {useState} from 'react';
import {SaleArea} from './styled';
import api from '../../services/api';


const MakeSale = () => {

const [id, setId] = useState('');
const [value, setValue] = useState('');

const handleMakeSale = (e) => {
    api.post("/sales",{
          id,
          value
    });
}

    return(
        <SaleArea>
            <div className='area--sale'>
                <h2>Adicione uma venda nova</h2>
                <form action="POST">
                    <div className='sale--input'>
                        <input 
                            type='text'
                            placeholder='Id do vendedor'
                            onChange={(e)=>setId(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='valor da venda'
                            onChange={(e)=>setValue(e.target.value)}
                        />
                    </div>
                    <div className="sale--button">
                        <button onClick={handleMakeSale}>Adicionar</button>
                    </div>
                </form>
            </div>
        </SaleArea>
    );
}

export default MakeSale;
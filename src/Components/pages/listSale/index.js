import React, { useState } from 'react';
import {SaleList} from './styled';
import api from '../../services/api';

const ListSale = () => {

    const [ list, setList ] = useState([]);

    const handleList = () => {
        api
            .get("/listsale")
            .then((response) => setList(response.data))
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        })
    }

    return(
        <SaleList>
            <div className='area--sale'>
                <h2>Encontre suas vendas</h2>
                <form action="GET">
                    <div className='sale--input'>
                        <input 
                            type='text'
                            placeholder='Id do vendedor'
                        />
                    </div>
                    <div className="sale--button">
                        <button onClick={handleList}>Mostrar vendas</button>
                    </div>
                </form>
                <div className='table--list'>
                    <h4>Listagem de vendas</h4>
                        <table>
                        <div className='table--header'>
                            <div className='header--components'>Id</div>
                            <div className='header--components'>Name</div>
                            <div className='header--components'>Email</div>
                            <div className='header--components'>Comissão</div>
                            <div className='header--components'>Valor da venda</div>
                            <div className='header--components'>Data da venda</div>
                        </div>
                       { 
                       list.map((i) =>
                            <div className='table--body'>
                                <div className='body--components'>{i.id}</div>
                                <div className='body--components'>{i.name}</div>
                                <div className='body--components'>{i.email}</div>
                                <div className='body--components'>{i.comissao}</div>
                                <div className='body--components'>{i.valor}</div>
                                <div className='body--components'>{i.data}</div>
                            </div>                        
                       )}
                    </table>
                </div>
            </div>
        </SaleList>
    );
}

export default ListSale;
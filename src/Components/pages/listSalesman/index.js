import React, { useState, useEffect } from 'react';
import {SaleList} from './styled';
import api from '../../services/api';

const ListSalesman = () => {

    const [ list, setList ] = useState([]);

    useEffect(() => {
        handleList();
    }, []);


    const handleList = (e) => {
        api
            .get("/listsalesman")
            .then((response) => setList(response.data))
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        })
    }

    
    return(
        <SaleList>
            <div className='area--salesman'>
                <h2>Todos os vendedores</h2>
                <div className='table--list'>
                    <h4>Listagem de vendedores</h4>
                        <table>
                        <div className='table--header'>
                            <div className='header--components'>Id</div>
                            <div className='header--components'>Name</div>
                            <div className='header--components'>Email</div>
                            <div className='header--components'>Comissão</div>
                        </div>
                       { 
                       list.map((i) =>
                            <div className='table--body'>
                                <div className='body--components'>{i.id}</div>
                                <div className='body--components'>{i.name}</div>
                                <div className='body--components'>{i.email}</div>
                                <div className='body--components'>{i.comissao}</div>
                            </div>                        
                       )}
                    </table>
                </div>
            </div>
        </SaleList>
    );
}

export default ListSalesman;
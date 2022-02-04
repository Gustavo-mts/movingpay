import React from 'react';
import {HeaderArea} from './styled';


const Header = () => {
    return(
        <HeaderArea>
            <div className='header--area'>
                <div className='header--logo'>
                   <a href="/"><img alt="" src="https://movingpay.com.br/assets/images/movingpay.png" /></a> 
                </div>
                <div className='header--buttons'>
                    <a href="/sales">Vendas</a>
                    <div className='dropdown'>
                        <span>Listas</span>
                        <div className='dropdown-content'>
                            <a href='/listsalesman'>todos os vendedores</a><br/>
                            <a href='/listsale'>todos as vendas</a>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderArea>
    );
}

export default Header;
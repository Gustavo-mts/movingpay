import styled from 'styled-components';

export const SaleArea = styled.div`
width: 100%;
height: 450px;
display: flex;
flex-direction: column;
justify-contet: center;
align-items:center;


.area--sale {
text-align: left;

    h2 {
      margin-bottom: 0px;
      color: #606060;  
    }
}

form {
    height: 300px;
    width: 600px;
    background-color: rgb(0,191,255);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .sale--input {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input {
            width: 40%;
            height: 30px;
            border:none;
            border-radius:10px;
            padding-left: 15px;
            margin-bottom: 30px;
        }
    }

    .sale--button {
        width:80%;
        height: 30px;
        text-align: center;

        button {
            font-weight: bold;
            background-color: #fff;
            color: #606060;
            padding: 10px  20px;
            border: none;
            border-radius: 10px;


            &:hover {
                color: #66ff66;
                cursor: pointer;
            }
        }
    }
}
`;
import styled from 'styled-components';

export const SaleList = styled.div`
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
    height: 50px;
    width: 600px;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;

    .sale--input {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        input {
            width: 100%;
            height: 30px;
            border: 1px solid rgb(0,191,255);
            border-radius:10px;
            padding-left: 15px;
        }
    }

    .sale--button {
        width:80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 5px;

        button {
            font-weight: bold;
            background-color: #fff;
            color: #606060;
            padding: 10px  20px;
            border: 1px solid rgb(0,191,255);
            border-radius: 10px;


            &:hover {
                color: #66ff66;
                cursor: pointer;
            }
        }
    }
}

.table--list {
    height: 330px;
    width: 100%;
    background-color: rgba(0,191,255, 0.7);
    border-radius: 10px;
    overflow: scroll;
    margin-top: 30px;

    h4 {
        color: #fff;
        margin-left: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: #F4F4F4;
    }
    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }

    table {
        width: 100%;
        font-size: 12px;
        text-align: center;
        border-top: 1px solid #66ff66;
        padding-top: 5px;

        .table--header {
            width: 100%;
            display: flex;           

            .header--components {
                width: 15%;
                color: #fff;
                font-weight: bold;
                padding-bottom: 5px;
            }
        }

        .table--body {
            display: flex;
            width: 100%;

            .body--components {
                width: 15%;
                color: #fff;
                margin-top: 5px;
                margin-bottom: 5px;
            }
        }
    }
}
`;
import styled from 'styled-components';

export const SaleList = styled.div`
width: 100%;
height: 450px;
display: flex;
flex-direction: column;
justify-contet: center;
align-items:center;


.area--salesman {
text-align: left;

    h2 {
      margin-bottom: 0px;
      margin-top: 40px;
      color: #606060;  
    }


    .table--list {
        height: 330px;
        width: 500px;
        background-color: rgba(0,191,255, 0.9);
        border-radius: 10px;
        overflow: scroll;
        margin-top: 10px;

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
                    width: 25%;
                    color: #fff;
                    font-weight: bold;
                    padding-bottom: 5px;
                }
            }

            .table--body {
                display: flex;
                width: 100%;

                .body--components {
                    width: 25%;
                    color: #fff;
                    margin-top: 5px;
                    margin-bottom: 5px;
                }
            }
        }
    }
}
`;
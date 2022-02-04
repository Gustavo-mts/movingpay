import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color: rgb(0,191,255);
padding: 10px;

.header--area {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;

    .header--logo {
      a{
        text-decoration: none;

        img {
          width: 100px;
        }
      }      
    }

    .header--buttons {
      width: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;

        a {
          background-color: #fff;
          color: #606060;
          padding: 10px;
          border: none;
          border-radius: 10px;
          text-decoration: none;

          &:hover {
            color: #66ff66;
            cursor: pointer;
          }
        }

        .dropdown {
            position: relative;
            display: inline-block;

            span {
              color: #fff;
            }
          
          
          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 180px;
            text-align: left;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            padding: 12px 16px;
            z-index: 1;


            a {
              background: transparent;
              color: #606060;
              text-decoration: none;
              padding: 5px;     
              
              &:hover {
                color: #66ff66;
                cursor:pointer;
              }
            }
          }

          &:hover .dropdown-content {
            display: block;
          }
        }
    }
}
`;
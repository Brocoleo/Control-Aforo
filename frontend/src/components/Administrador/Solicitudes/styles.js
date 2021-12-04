import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default  makeStyles((theme) => ({
    root: {
      textAlign: '-webkit-center',
      boxSizing: 'border-box',
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        marginTop: '18%',
      }
    },
    admin: {
      marginTop: '5%',
      textAlign: '-webkit-center',
      boxSizing: 'border-box',
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        marginTop: '18%',
      }
    },
  image: {
    padding: '4px'
  },
  marginTop: {
      marginTop: '10px',
  },
  
  }));



export const InfoContainer = styled.div`
display: flex;
padding: 10px;
width: 380px;
flex-direction: column;
align-items: center;
border-radius: 30px;
box-shadow: 0 9px 12px 0 #B993D6;
background: #fff;  
font-family: 'Nunito', sans-serif;
@media (max-width: 768px) {
    margin-top: 39%;
  }
`;

export const TituloInfo = styled.h2`
  margin-top: 10%;
  margin-bottom: 10%;
`;

export const TituloLogin = styled.h2`
  margin-bottom: 8%;
  color: #334257;
`;

export const CardModulos = styled.div`
  margin-top:3%;
  display: flex;
  padding: 0px;
  width: 220px;
  height:250px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 9px 12px 0 #B993D6;
  background: #fff;
    @media (max-width: 768px) {
      width: 300px;
      margin-top: 9%;
      margin-left: 25%;
    }
  `;

export const CardEstudiantes = styled.div`
margin-top:3%;
display: flex;
padding: 0px;
width: 220px;
height:250px;
flex-direction: column;
align-items: center;
border-radius: 20px;
box-shadow: 0 9px 12px 0 #B993D6;
background: #fff;
font-family: 'Nunito', sans-serif;
@media (max-width: 768px) {
  width: 300px;
  margin-top: 9%;
  margin-left: 25%;
}
`;

export const CardEventos = styled.div`
margin-top:3%;
display: flex;
padding: 0px;
width: 220px;
height:250px;
flex-direction: column;
align-items: center;
border-radius: 20px;
box-shadow: 0 9px 12px 0 #B993D6;
background: #fff;
font-family: 'Nunito', sans-serif;
@media (max-width: 768px) {
  width: 300px;
  margin-top: 9%;
  margin-left: 25%;
}
`;

export const CardProfesores = styled.div`
margin-top:3%;
display: flex;
padding: 0px;
width: 220px;
height: 250px;
flex-direction: column;
align-items: center;
border-radius: 20px;
box-shadow: 0 9px 12px 0 #B993D6;
background: #fff;
font-family: 'Nunito', sans-serif;
@media (max-width: 768px) {
  width: 300px;
  margin-top: 9%;
  margin-left: 25%;
}
`;

export const DataEventos = styled.span`
  text-transform: none;
  padding-top: 6px;
  padding-bottom: 6px;
  text-align: center;
  border-radius:25px;
  background: rgba(199,1,1,1);
  width: 40%;
  font-weight: 300;
  font-size: 1.6rem;
  color: #fff;
`;

export const DataUsers = styled.span`
  text-transform: none;
  padding-top: 1px;
  padding-bottom: 1px;
  text-align: center;
  border-radius:25px;
  background-color: #00c6ff;
  width: 40%;
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  font-size: 1.6rem;
  color: #fff;
`;

export const DataEstudiantes = styled.span`
  text-transform: none;
  padding-top: 6px;
  padding-bottom: 6px;
  text-align: center;
  border-radius:25px;
  background-color: rgba(255,164,0,1);
  width: 40%;
  font-weight: 300;
  font-size: 1.6rem;
  color: #fff;
`;

export const DataProfesores = styled.span`
  text-transform: none;
  padding-top: 6px;
  padding-bottom: 6px;
  text-align: center;
  border-radius:25px;
  background-color: #8E2DE2;
  width: 40%;
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  font-size: 1.6rem;
  color: #fff;
`;

export const DataLabel = styled.span`
  text-transform: none;
  text-align: center;
  width: 100%;
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
  color: #fff;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
export const CardTitle = styled.span`
  margin: 18px 0px 0px;
  text-transform: none;
  text-align: center;
  width: 100%;
  font-weight: bold;
  font-size: 1.5rem;
  color: #000;
`;

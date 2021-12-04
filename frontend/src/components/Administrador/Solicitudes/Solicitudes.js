import React, {useState, useEffect} from 'react'
import FadeIn from 'react-fade-in';
import Grid from '@material-ui/core/Grid';
import Modulos from './Modulos'
import Eventos from './Eventos'
import CountUp from 'react-countup';
import  {CardModulos, DataUsers,CardEstudiantes,CardLink, CardTitle, DataEstudiantes, CardProfesores, DataProfesores, CardEventos, DataEventos} from './styles'
import Profesores from './Profesores';
import Estudiantes from './Estudiantes';
const API = process.env.REACT_APP_API;

const Solicitudes = ({profes, ramos}) => {
    let [eventos, setEventos] = useState([]);

    const getEvento = async () => {
      const res = await fetch(`${API}/eventos`);
      const data = await res.json();
      setEventos(data);
    };

    useEffect(() => {
      getEvento(); 
    }, []);
    return (
      <FadeIn>
      <div class="row">
      <div class="col">
      <Grid container spacing={2}> 
      <Grid item xs>
        <CardLink to="/modulos" style={{ textDecoration: 'none' }}>
          <CardModulos>
          <CardTitle>Modulos</CardTitle>
          <Modulos />
            <DataUsers>
            <CountUp  start={0} end={ramos} duration={1} />
            </DataUsers>
          </CardModulos> 
        </CardLink> 
        </Grid>

        <Grid item xs>
        <CardLink to="/evento" style={{ textDecoration: 'none' }}>
          <CardEventos>
          <CardTitle>Eventos</CardTitle>
          <Eventos />
            <DataEventos>
            <CountUp  start={0} end={eventos.length} duration={1} />
            </DataEventos>
          </CardEventos> 
        </CardLink> 
        </Grid>

        <Grid item xs>
        <CardLink to="/profesores" style={{ textDecoration: 'none' }}>
          <CardProfesores>
          <CardTitle>Profesores</CardTitle>
          <Profesores />
            <DataProfesores>
            <CountUp  start={0} end={profes} duration={1} />
            </DataProfesores>
          </CardProfesores> 
        </CardLink> 
        </Grid>

        <Grid item xs>
        <CardLink to="/estudiantes" style={{ textDecoration: 'none' }}>
          <CardEstudiantes>
          <CardTitle>Estudiantes</CardTitle>
          <Estudiantes />
            <DataEstudiantes>
            <CountUp  start={0} end={1} duration={1} />
            </DataEstudiantes>
          </CardEstudiantes> 
        </CardLink> 
        </Grid>
      </Grid>  
   </div>

      <div class="col">
      <div className=" tabla">
      <h4>Eventos Agendados</h4>
            <table className="table table-responsive-sm table-secondary borderTable">
              <thead >
                <tr >
                  <th>Lugar</th>
                  <th>Aforo</th>
                  <th>Profesor</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                </tr>
              </thead>
              <tbody className="table-dark">
                {eventos.map((evento) => (
                  <tr key={evento._id}>
                    <td>{evento.lugar}</td>
                    <td>{evento.aforo}</td>
                    <td>{evento.profesor}</td>
                    <td>{(new Date(evento.fecha)).toLocaleDateString() }</td>
                    <td>{evento.bloque}</td>
                  
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
        </div>
        </div>
      </FadeIn>
    )
}

export default Solicitudes

import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import logo from '../../../assets/aforo.png';
import { NavIcon, Bars } from './NavbarElements';
import {Link } from "react-router-dom";
import useStyles from './styles';

const NavbarAsistente = ({ toggle }) => {
    const classes = useStyles();


    return (
        <>

            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar >
                <Link to="/asistente">
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="MeAnoto" height="70px" className={classes.image}/>
                    </Typography>
                </Link>
                   <NavIcon onClick={toggle}>
                   <p   className={classes.menu}>Menu</p>
                  <Bars />
                </NavIcon>
                </Toolbar>
            </AppBar> 
        </>
    )
}

export default NavbarAsistente;

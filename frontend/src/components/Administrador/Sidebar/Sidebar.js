import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './styles';

import { FaUserGraduate } from "react-icons/fa";  
import { ImUsers } from "react-icons/im";
import { MdLibraryBooks } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>        
        <SidebarLink to='/evento'><IoCalendar />&nbsp;&nbsp;Evento</SidebarLink>
        <SidebarLink to='/profesores'><ImUsers />&nbsp;&nbsp;Profesores</SidebarLink>
        <SidebarLink to='/estudiantes'><FaUserGraduate />&nbsp;&nbsp;Estudiantes</SidebarLink>
        <SidebarLink to='/modulos'><MdLibraryBooks />&nbsp;&nbsp;Modulos</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Cerrar Sesion</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
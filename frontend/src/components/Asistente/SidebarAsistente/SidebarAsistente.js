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
import { IoPersonSharp } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const SidebarAsistente = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>        
        <SidebarLink to='/asistente'><AiFillHome />&nbsp;&nbsp;Inicio</SidebarLink>
        <SidebarLink to='/informacion'><IoPersonSharp />&nbsp;&nbsp;Info Personal</SidebarLink>
        <SidebarLink to='/historial'><FaClipboardList />&nbsp;&nbsp;Historial</SidebarLink>
        <SidebarLink to='/reservas'><BsFillCalendarCheckFill />&nbsp;&nbsp;Reservas</SidebarLink>
        
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Cerrar Sesion</SidebarRoute>
      </SideBtnWrap> 
    </SidebarContainer>
  );
};

export default SidebarAsistente;
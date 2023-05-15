import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute, 
    SideBtnWrap
} from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Início</SidebarLink>
                <SidebarLink to="/">Mais Pedidos</SidebarLink>
                <SidebarLink to="/">Prato do Dia</SidebarLink>
                <SidebarLink to="/">Sobremesas</SidebarLink>
                <SidebarLink to="/">Menu Completo</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Peça Agora</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
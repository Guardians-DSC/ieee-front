import React from 'react'
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import style from '../../Style/Style'

import { useSignDataContext } from '../../storage/context/SingInContext';

const { SubMenu } = Menu;
const { Sider } = Layout;
const imgSrc = "https://i1.wp.com/ieeer8.org/wp-content/uploads/2016/04/ieeelogo_512_transparent.png?fit=512%2C512&ssl=1";

const SideBar = () => {
  const { logOut } = useSignDataContext();
  return (
    <Sider breakpoint="lg" collapsedWidth="0" style={{zIndex:1}}>
      <div style={style.logo}>
        <img style={style.i3eIcon} src={imgSrc} alt="logo ieee"/>
        <h3 style={style.i3eTitle}> IEEE Task Manager </h3>
      </div>
      <Menu theme='dark' mode='inline'>
        <SubMenu key='sub1' title = { <div> <Icon type="container"/> <span> Atividades </span> </div> }>
          <Menu.Item key="1"> <Link to="/novaAtividade"> Cadastrar Atividade </Link> </Menu.Item>
          <Menu.Item key='2'> <Link to="/"> Listar Atividades </Link> </Menu.Item>
        </SubMenu>

        <SubMenu key='sub2' title = { <div> <Icon type="user"/> <span> Membros </span> </div>}>
          <Menu.Item key="4"> <Link to="/novoMembro"> Cadastrar Membro </Link> </Menu.Item>
          <Menu.Item key='5'> <Link to="/listarMembros"> Listar Membros </Link> </Menu.Item>
        </SubMenu>

        <SubMenu key='sub3' title = { <div> <Icon type="team"/> <span> Núcleos </span> </div> }>
          <Menu.Item key="6"> <Link to="/novoNucleo"> Cadastrar Núcleo </Link> </Menu.Item>
          <Menu.Item key='7'> <Link to="/listarNucleos"> Listar Núcleos </Link> </Menu.Item>
        </SubMenu>

        <SubMenu key='sub4' title = { <div> <Icon type="logout"/> <span> LogOut </span> </div>}>
          <Menu.Item key="8" onClick={logOut}> <Link to="/"> Logout </Link> </Menu.Item>
        </SubMenu>

      </Menu>
    </Sider>
  )
}

export default SideBar;

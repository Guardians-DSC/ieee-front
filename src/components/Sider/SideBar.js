import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './sidebar.css';
import TaskEditModal from '../Task/TaskEditModal';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const { SubMenu } = Menu;
const { Sider, Content } = Layout;
const imgSrc = "https://i1.wp.com/ieeer8.org/wp-content/uploads/2016/04/ieeelogo_512_transparent.png?fit=512%2C512&ssl=1";

const SideBar = () => {

    const [sideBarOpen, setSideBarOpen] = useState();

    return (
        <Sider breakpoint="lg" collapsedWidth="0" style={{zIndex:1}}>
            <div className="logo">
                <img className="i3eIcon" src={imgSrc} alt="logo ieee"/>
                <h3 className="i3eTitle">IEEE Task Manager</h3>
            </div>
            <Menu theme='dark' mode='inline'>
                <SubMenu key='sub1' title = { <div> <Icon type="container"/> <span> Atividades </span> </div> }>
                    <Menu.Item key="1">
                        <Link to="/novaAtividade"> Cadastrar Atividade </Link>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Link to="/"> Listar Atividades </Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key='sub2' title = { <div> <Icon type="user"/> <span> Membros </span> </div>}>
                    <Menu.Item key="4" onClick={null}>
                        <Link to="/novoMembro"> Cadastrar Membro </Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key='sub3' title = { <div> <Icon type="team"/> <span> Núcleos </span> </div> }>
                    <Menu.Item key="7">Vincular Membro a Núcleo</Menu.Item>
                    <Menu.Item key="8">Remover Membro de Núcleo</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default SideBar;

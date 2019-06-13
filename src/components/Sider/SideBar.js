import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './sidebar.css'

import Modal from '../Task/TaskRegisterModal';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class SideBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            /* registration: false, */
        }
        
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    /* handleRegistration = () => {
        this.setState({
            registration: true
        })
    } */

    render() {
        return (
            <Layout style={{height:'100vh'}}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo">
                        <img src="https://libapps-au.s3-ap-southeast-2.amazonaws.com/accounts/139828/images/IEEELogo.png" alt="logo ieee"/>
                        <h4 text-color='white'>IEEE Task Manager</h4>
                    </div>
                    <Menu
                        theme='dark'
                        mode='inline'
                    >
                        <SubMenu
                            key='sub1'
                            title = {
                                <span>
                                    <Icon type="container" />
                                    <span>
                                        Atividades
                                    </span>
                                </span>
                            }
                        >
                            <Menu.Item 
                                key="1"
                                onClick={this.handleRegistration}
                            >
                                Cadastrar Atividade
                            </Menu.Item>
                            <Menu.Item key="2">Remover Atividade</Menu.Item>
                            <Menu.Item key="3">Editar Atividade</Menu.Item>
                            {/* {this.state.registration ? <Modal visible={this.state.registration} /> : null} */}

                        </SubMenu>
                        <SubMenu
                            key='sub2'
                            title = {
                                <span>
                                    <Icon type="user" />
                                    <span>
                                        Membros
                                    </span>
                                </span>
                            }
                        >
                            <Menu.Item key="4">Cadastrar Membro</Menu.Item>
                            <Menu.Item key="5">Remover Membro</Menu.Item>
                            <Menu.Item key="6">Editar Membro</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key='sub3'
                            title = {
                                <span>
                                    <Icon type="team" />
                                    <span>
                                        Núcleos
                                    </span>
                                </span>
                            }
                        >
                            <Menu.Item key="7">Vincular Membro a Núcleo</Menu.Item>
                            <Menu.Item key="8">Remover Membro de Núcleo</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </Layout>
        )
    }
}

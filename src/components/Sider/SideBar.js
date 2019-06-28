import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './sidebar.css';
import Modal from '../Task/TaskRegisterModal';

const { SubMenu } = Menu;
const { Sider, Content } = Layout;
const imgSrc = "https://i1.wp.com/ieeer8.org/wp-content/uploads/2016/04/ieeelogo_512_transparent.png?fit=512%2C512&ssl=1";

export default class SideBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            isEdition: false,
        }
    }

    openModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    
                    style={{height:'100vh', minHeight:'100vh', zIndex:1}}
                >
                    
                    <div className="logo">
                        <img className="i3eIcon" src={imgSrc} alt="logo ieee"/>
                        <h3 className="i3eTitle">IEEE Task Manager</h3>
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
                                onClick={this.openModal}
                            >
                                Cadastrar Atividade
                            </Menu.Item>
                            <Modal isEdition={false} show={this.state.isOpen} onClose={this.openModal}/>
                            <Menu.Item
                                key='2'
                                onClick={null} //TODO
                            >
                                Listar Atividades
                            </Menu.Item>
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
                <Layout>
                    <Content style={{  overflow: 'initial' }}>
                        {this.props.content}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

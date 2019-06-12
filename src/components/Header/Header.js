import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;
const { SubMenu} = Menu;

export default class HeaderComponent extends Component {

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    

    render() {
        return (
            <Layout>
                <Header className='header' style={{ padding:'0', alignContent:'right'}}>
                    <div className='logo'/>
                    <Menu
                        theme='dark'
                        mode='horizontal'
                        style={{ lineHeight:'64px'}}
                    >
                        <Menu.Item key="item:1">Atividades</Menu.Item>
                        <Menu.Item key="item:2">Núcleos</Menu.Item>

                    </Menu>
                </Header>
            </Layout>
        )
    }
}

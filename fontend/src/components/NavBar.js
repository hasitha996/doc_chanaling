
 import { Link } from "react-router-dom";
import React from 'react';
import { Layout, Menu, Button } from 'antd';


const { Header } = Layout;

const NavBar = () => (
  <Layout className="layout">
    <Header style={{ backgroundColor: 'white',display: 'flex', justifyContent: 'space-between' }}>
      <div className="logo" style={{ color: 'white' }}>  <img src={process.env.PUBLIC_URL + '/hlogo.PNG'} /> </div>
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" >Home  <Link to="/" /></Menu.Item>
        <Menu.Item key="2" >Doctor  <Link to="/doctor" /></Menu.Item>
        <Menu.Item key="3">Services <Link to="/services" /> </Menu.Item>
        <Menu.Item key="4" >Review <Link to="/review" /></Menu.Item>
      </Menu>
      <div>
        <Button type="primary" style={{ marginRight: '10px' }}>CONTACT US</Button>      
      </div>
    </Header>
  </Layout>
);




export default NavBar;
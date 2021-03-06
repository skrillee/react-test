import React, { Component } from 'react';
import menuConfig from './../../config/menuConfig'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import './index.css'
const SubMenu = Menu.SubMenu;
class NavLeft extends Component{
	componentWillMount(){
		const menuTreeNode = this.renderMenu(menuConfig);
		this.setState({
			menuTreeNode
		})
	}
	renderMenu =(data)=>{
		return data.map((item)=>{
			if(item.children){
				return(
					<SubMenu title={item.title} key={item.key}>
						{ this.renderMenu(item.children)}
					</SubMenu>	
				)
			}
			return <Menu.Item title={item.title} key={item.key}>
						<NavLink to={item.key}>{ item.title }</NavLink>
					</Menu.Item>
		})
	}
	render() {
		return(
			<div>
				<div className="logo">
					<h1 className="text">HTC</h1>
				</div>
				<Menu
					theme="dark"
				>
					{ this.state.menuTreeNode }
				</Menu>
			</div>
		);
	}
}
export default NavLeft;
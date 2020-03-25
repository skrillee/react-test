/**
 * Created by 19797 on 2020/3/18.
 */
import React, { Component } from 'react';
import menuConfig from './../../config/menuConfig'
import { NavLink } from 'react-router-dom';
const SubMenu = Menu.SubMenu
class NavLeft extends Component{
    componentWillMount(){
        const menuTreenode = this.renderMenu(menuConfig)
    }
    renderMenu =(data)=>{
        return data.map()
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default NavLeft
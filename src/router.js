import React , { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './page/login'
import Error from './page/ui/error'
import NoMacth from './page/nomatch'
import DashBoard from './page/ui/card'
import Home from './page/home'
import Transation from './page/form/transaction'
class IRouter extends Component{
	render(){
		return(
			<HashRouter>
				<App>
					<Route path="/" render={()=>
						<Admin>

							{/*
								用render这种方式返回子路由
							*/}
							<Route path="/admin/home" component={Home}/>
							{/*<Route component={NoMacth}/>*/}
							<Route path="/admin/form/dashBoard" component={DashBoard} />
							<Route path="/admin/form/transaction" component={Transation}/>
						</Admin>
					}/>
					<Route path="/login" component={Login}/>
					{/*
						这里如果不加精准匹配exact的话,只写/，那么其他两个路由也会被匹配。出现在同一页面里面
					*/}
					<Route path="/home" component={Home}/>
				</App>
			</HashRouter>
			);
	}
}
export default IRouter;
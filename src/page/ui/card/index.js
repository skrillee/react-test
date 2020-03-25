/**
 * Created by 19797 on 2020/3/21.
 */
import React, { Component } from 'react'
import { Card, Button } from 'antd'
import './card.less'
class DashBoard extends Component{
    state={
        loading:true
    }
    handleCloseLoading(){
        this.setState({
            loading:false
        })
    }

    render(){
        return(
            <div>
                <Card title="仪表盘">
                    <Button type="primary" icon="search">查看</Button>
                    <Button type="disabled">关闭</Button>
                    <Button type="danger" icon="delete">删除</Button>
                </Card>
                <Card title="仪表盘">
                    <Button type="primary" loading={ this.state.loading } icon="search">确定</Button>
                    <Button type="disabled" loading={ true }>编辑</Button>
                    <Button type="danger" icon="delete" onClick={this.handleCloseLoading.bind(this)}>删除</Button>
                </Card>
            </div>
        )
    }
}
export default DashBoard;
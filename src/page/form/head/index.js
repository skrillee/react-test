/**
 * Created by 19797 on 2020/3/22.
 */
import React, { Component } from "react";
import { Form, Card, Input, Button, Col, Row } from "antd";
import './index.less'
const FormItem = Form.Item;
class FormHead extends Component{
    render(){
        return(
            <div>
                <Card title="交易表单">
                    <Form layout="inline">
                        <Row>
                            <Col span="12" style={{ textAlign: 'left'}}>
                                <FormItem
                                    label="表单号"
                                    name="number"
                                    rules={[{ required:true,message:'请输入表单号' }]}
                                >
                                    <Input placeholder="请输入表单号"/>
                                </FormItem>
                                <FormItem>
                                    <Input placeholder="请输入表单名称"/>
                                </FormItem>
                            </Col>
                            <Col span="12" style={{ textAlign: 'right' }}>
                                <Button type="primary" icon="search">搜索</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default FormHead;
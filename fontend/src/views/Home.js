import React from "react";
import { useState } from 'react';
import { Form, Input, Button, Alert, Row, Col, Radio } from 'antd';
import ButtonComponent from '../components/ButtonComponent';

export const Home = () => {
  const [value, setValue] = useState(1);
  const [patientname, setPatientname] = useState();
  const [patientemail, setPatientemail] = useState();

  const onChange = (e) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const handlePatientNameChange = (e) => {
    setPatientname(e.target.value);
  };
  const handlePatientEmailChange = (e) => {
    setPatientemail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };



  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col span="8"></Col>
        <Col span="12"><h1>Search Doctor,Make An Appoinment</h1></Col>
      </Row>
      <Row>
        <Col span="8"></Col>
        <Col span="12"><h3>Discover the best doctors,clinic & hospitel the city nearest to you</h3></Col>
      </Row>
      <Row>
        <Col span="1"></Col>
        <Col span="8"><h4>(only For Medical Treatements) </h4></Col>
        <Col span="4"><h3>Name</h3></Col>
        <Col span="4"><h3>Phpne or Email</h3></Col>
      </Row>
      <Row>
        <Col span="1"></Col>
        <Col span="3">Treatement Inquiry for </Col>
        <Col span="5">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>My Self</Radio>
            <Radio value={2}>Someone</Radio>
          </Radio.Group>

        </Col>
        <Col span="4">
          <Form.Item
            name="patientemail"
            value={patientemail}
            onChange={handlePatientNameChange}
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

        </Col>
        <Col span="4">
          <Form.Item

            name="patientname"
            value={patientname}
            onChange={handlePatientEmailChange}
            rules={[{ required: true, message: 'Please input your email or phone!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span="4">
          <Form.Item>
            <ButtonComponent></ButtonComponent>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
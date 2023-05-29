import React from "react";
import { useState,useEffect } from 'react';
import { Form, Input, Button, Alert, Row, Col, Radio, Card,Space } from 'antd';
import { api, msg } from '../services';
import { TeamOutlined, CommentOutlined } from '@ant-design/icons';
import ButtonComponent from '../components/ButtonComponent';
import SearchBar from "../components/SearchBar";
import SelectCheckBox from '../components/SelectCheckBox';
import AppDatepicker from '../components/AppDatepicker';
import '../style/HomeStyle.scss';
import SingalSelect from '../components/SingalSelect';
import axios from 'axios';


export const Home = () => {
  const [value, setValue] = useState(1);
  const [patientname, setPatientname] = useState();
  const [patientemail, setPatientemail] = useState();

  const onChange = (e) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);
 

  const handlePatientNameChange = (e) => {
    setPatientname(e.target.value);
  };
  const handlePatientEmailChange = (e) => {
    setPatientemail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const [listhospitel, setHospitel] = useState([]);
  const [listdocters, setDoc] = useState([]);
  
  const fetchData = async () => {
    try {
   //call api for get docter and hospitel list
      axios.get(`http://localhost:8000/api/appointment`)
      .then(res => {
            setHospitel(res.data.hospitel_list);
            setDoc(res.data.doctor_list);  
      })
      
    } catch (error) {
     
      return msg.error('Unable to fetch data!');
    }
  };
  const gridStyle = {
    width: '33%',
    height: '280px',
    textAlign: 'center',
    color: 'white',
    background: '#152238'
  };
  const gridStyle2 = {
    width: '66%',
    height: '280px',
    textAlign: 'center',
    color: 'white',
    background: '#152238'
  };

  const doc1 = [
    {
      id: 1,
      name: 'test1'
      
    },
    {
      id: 2,
      name: 'test2'
    },
    {
      id: 3,
      name: 'test 3'
    },
    {
      id: 4,
      name: 'test4',
     
    },
  ];

  const setDates = [
    {
      id: 1,
      date: "2023-05-16"
    },
    {
      id: 2,
      date: "2023-05-18"
    },
    {
      id: 3,
      date: "2023-05-20"
    }
  ];

  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];

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
        <Col span="4"><h3>Phone or Email</h3></Col>
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
      <Row>
        <Col span="3">
        </Col>
        <Col span="9">
          <Row>
            <Space direction="vertical" >
            <SearchBar placeholder="Search" data={doc1} />
            <br/>
            <br/>
            <SingalSelect />
            <br/>           
            <SingalSelect />
            <br/>     
            <SelectCheckBox/>          
            </Space>
          </Row>

        </Col>
        <Col span="11">
          <Form.Item>
            <Card>
              <Card.Grid hoverable={false} style={gridStyle}>
                <img src={process.env.PUBLIC_URL + '/doc2.jpg'} className="imagetype_one" />
                <br />
                Hilary Mr
                <br />
                senior at orthopedic
              </Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle2}>
                <Col span="12">
                  <img src={process.env.PUBLIC_URL + '/doc1.jpg'} className="imagetype_one" />
                  <br />
                  Elyssa perry
                  <br />
                  senior at orthopedic
                  <AppDatepicker array={setDates} />
                  <button> <TeamOutlined /></button>
                  <button> <CommentOutlined /></button>

                </Col>
                <Col span="12">

                </Col>
              </Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle}>
                <img src={process.env.PUBLIC_URL + '/doc3.jpg'} className="imagetype_one" />
                <br />
                Lena Marina
                <br />
                senior at orthopedic
              </Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle}>
                <img src={process.env.PUBLIC_URL + '/doc4.jpg'} className="imagetype_one" />
                <br />
                Mahendra Perera
                <br />
                senior at orthopedic
              </Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle}>
                <img src={process.env.PUBLIC_URL + '/doc5.jpg'} className="imagetype_one" />
                <br />
                Lakshmen Obeysekara
                <br />
                senior at orthopedic

              </Card.Grid>

            </Card>
          </Form.Item>
        </Col>
        <Col span="1">

        </Col>
      </Row>
    </Form>
  );
};
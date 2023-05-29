import React from "react";
import { useState } from 'react';
import { Form, Input, Button, Alert, Row, Col, Radio, Card,Space } from 'antd';
import { TeamOutlined, CommentOutlined } from '@ant-design/icons';
import ButtonComponent from '../components/ButtonComponent';
import SearchBar from "../components/SearchBar";
import SelectCheckBox from '../components/SelectCheckBox';
import AppDatepicker from '../components/AppDatepicker';
import '../style/HomeStyle.scss';
import SingalSelect from '../components/SingalSelect';


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

  const BookData = [
    {
      id: 1,
      title: 'Enjoy studying English',
      tags: [
        {
          id: 'tag1',
          title: 'English',
          slug: 'english',
        },
        {
          id: 'tag2',
          title: 'For kids',
          slug: 'kids',
        },
      ],
    },
    {
      id: 2,
      title: 'Parlons français',
      tags: [
        {
          id: 'tag3',
          title: 'French',
          slug: 'french',
        },
        { id: 'tag2', title: 'Kids', slug: 'kids' },
      ],
    },
    {
      id: 3,
      title: 'Intermediate English',
      tags: [
        {
          id: 'tag1',
          title: 'English',
          slug: 'english',
        },
        {
          id: 'tag4',
          title: 'Adults',
          slug: 'adults',
        },
      ],
    },
    {
      id: 4,
      title: 'How to study French',
      tags: [
        {
          id: 'tag3',
          title: 'French',
          slug: 'french',
        },
        {
          id: 'tag4',
          title: 'Adults',
          slug: 'adults',
        },
      ],
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
            <SearchBar placeholder="Search" data={BookData} />
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
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import {useState, useEffect} from "react";

export const Banner = (props) => {
    const [loopNum, setLoopName] = useState(0);

    const toRotate = ["Web Developer", "Web Designer" , "UI/UX Designer"]
  return (
      <section className={'banner'} id={'home'}>
          <Container>
              <Row className={'align-items-center'}>
                  <Col xs={12} md={6} xl={7}>
                      <span className={'tagline'}>Welcome to my portfolio</span>
                      <h1>{props.text1}<span className={'wrap'}>web developer</span></h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <button onClick={() => console.log('connect')}>Let connect <ArrowRightCircle size={25}/> </button>
                  </Col>
                  <Col xs={12} md={6} xl={5}>
                      <img src={headerImg} alt={'Header IMG'}/>
                  </Col>
              </Row>
          </Container>
      </section>
  );
}
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import {useState, useEffect} from "react";
import '../components/Banner/Banner.css';
import comet from '../assets/img/comet.png';

export const Banner = () => {
    const [loopNum, setLoopName] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Реакт разработчик", "Веб дизайнер", "UI/UX дизайнер"]
    const [text,setText] = useState('');
    const period = 2000;
    const [delta,setDelta] = useState(300 - Math.random()* 100) ;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return ()=> {clearInterval(ticker)};
    },[text])

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length-1):fullText.substring(0, text.length + 1);
      setText(updateText);
      if (isDeleting){
          setDelta(prevDelta => prevDelta / 2)
      };

      if (!isDeleting && updateText == fullText){
          setIsDeleting(true);
          setDelta(period);
      }else if(isDeleting && updateText === ''){
          setIsDeleting(false);
          setLoopName(loopNum+1);
          setDelta(500);
      }
    }


  return (
      <section className={'banner'} id={'home'}>
        {/*  <div className={'stars'}>
              <img src={comet}/>
          </div>*/}
          <Container>
              <Row className={'align-items-center'}>
                  <Col xs={12} md={6} xl={7}>
                      <span className={'tagline'}>Welcome to my portfolio</span>
                      <h1>Привет я Алексей, <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Реакт разработчик", "Веб дизайнер", "UI/UX дизайнер" ]'></span><span  className="wrap">{text}</span></h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <button onClick={() => console.log('connect')}>Let connect <ArrowRightCircle size={25}/> </button>
                  </Col>
                  <Col xs={12} md={6} xl={5}>
                      <img className={'main-image'} src={headerImg} alt={'Header IMG'}/>
                  </Col>
              </Row>
          </Container>
      </section>
  );
}
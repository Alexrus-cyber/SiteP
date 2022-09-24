import React, {useRef, useEffect } from "react";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "./Skills/img/skyball.png";
import IMG from "./Skills/img/csshtml.jpg";
import IMG2 from "./Skills/img/react.jpg";
import IMG3 from "./Skills/img/node.jpeg";
import styles from './Skills/Skills.module.css';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Skills = () => {
    const ref = useRef(null);
    useEffect(() => {
        gsap.to("#skills", {
            duration: "100%",
            triggerHook: 1,
            scrollTrigger: {
                trigger: ".skill",
                scrollTrigger: {
                    trigger: ".skill",
                }
            }
        });
    }, []);


    const alignCenter = { display: 'flex', alignItems: 'center' , justifyContent: 'center' }
    const alignCenter1 = { display: 'flex', alignItems: 'top' }

    return(
        <section className={'skill'} id={'skills'} >
        <div className={styles.space}>
            <Parallax pages={5}>
              <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <div className={`${styles.background} ${styles.jump}`} >
                        <p className={styles.scrollText}>Здесь пожалуй я расскажу о себе!</p>
                    </div>
                </ParallaxLayer>


                <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                    <div>
                        <img className={styles.imageMain} src={headerImg}/>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer  offset={1} speed={0.5} style={{ ...alignCenter1, justifyContent: 'flex-end' }}>
                       <div  className={`${styles.card} ${styles.parallax}`}>
                           <div className={styles.imageContent}>
                               <img src={IMG}/>
                           </div>
                           <div className={styles.text}>
                               <h2>Знание CSS и HTML</h2>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               </p>
                           </div>
                       </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.5} factor={1/2} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div  className={`${styles.card} ${styles.parallax}`}>
                        <div className={styles.imageContent}>
                            <img src={IMG2}/>
                        </div>
                        <div className={styles.text}>
                            <h2>Знание React.JS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.5} factor={1/2} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div  className={`${styles.card} ${styles.parallax}`}>
                        <div className={styles.imageContent}>
                            <img src={IMG3}/>
                        </div>
                        <div className={styles.text}>
                            <h2>Изучение Node.JS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.5} factor={1/2} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <div className={`${styles.background} ${styles.jump}`} >
                        <p className={styles.scrollText}>Конец!</p>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
        </section>
    );

}
import styles from './index.module.scss'

import {ImLinkedin2,ImGithub,ImTwitter,ImNewspaper } from 'react-icons/im'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { useMode } from '../../contexts/ModeContext';

export default function Footer(){

    const {
        isDark
    } = useMode();

    useEffect(()=>{
        Aos.init({
            duration:3000
            })
    },[]);

    const linkedinUrl = "https://www.linkedin.com/in/jo%C3%A3o-pedro-albuquerque-3047551b9/";
    const twitterUrl = "https://twitter.com/jpedroalb_dev";
    const githubUrl = "https://github.com/joaopedroalb";
    const canvasUrl = "https://www.canva.com/design/DAElVxg9R_c/wAmiYmT7wNl65aQu4-go5w/view?utm_content=DAElVxg9R_c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink";

    return(
        <div className={isDark ? styles.container:styles.containerLight}>
            <div data-aos="fade-up" data-aos-delay="2000">
                <a href={linkedinUrl} target="_blank"><span><ImLinkedin2 size={45}/></span></a>
            </div>
            <div data-aos="fade-up" data-aos-delay="2300">
                <a  href={githubUrl} target="_blank"><span><ImGithub size={45}/></span></a>
            </div>
            <div data-aos="fade-up" data-aos-delay="2600">
                <a href={twitterUrl} target="_blank"><span><ImTwitter size={45}/></span></a>
            </div>
            <div data-aos="fade-up" data-aos-delay="2900">
                <a href={canvasUrl} target="_blank"><span><ImNewspaper size={45}/></span></a>
            </div>
        </div>
    )
}
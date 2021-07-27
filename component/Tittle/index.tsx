import styles from './index.module.scss'
import { useMode } from '../../contexts/ModeContext';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Title(){

    const {
        isDark
    } = useMode();

    useEffect(()=>{
        Aos.init({
            disable: 'mobile'
        })
    },[]);

    return (
        <div className={isDark? styles.container:styles.containerLight}>
            {isDark ? 
            (<><h1 data-aos="fade-left"><strong>J</strong>oão Pedro Albuquerque</h1>
            <h5 data-aos="fade-right" data-aos-delay="1200">frontend <strong>d</strong>eveloper</h5></>)
            :
            (<><h1 data-aos="fade-left">João Pedro <strong>A</strong>lbuquerque</h1>
            <h5 data-aos="fade-right" data-aos-delay="1200"><strong>f</strong>rontend developer</h5></>)
            }
        </div>
    )
}
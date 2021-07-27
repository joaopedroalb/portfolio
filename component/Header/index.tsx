import { useRef, useEffect, useState } from 'react';
import { ModeContext, useMode } from '../../contexts/ModeContext';

import {FiSun} from 'react-icons/fi'
import {BsMoon} from 'react-icons/bs'

import styles from './index.module.scss'


export default function Header(){

    const {
        isDark,
        toggleMode
    } = useMode();

    return(
        <div className={styles.headerContainer} onClick={()=>toggleMode()}>
            <span data-aos="zoom-in" >{isDark? 
                <FiSun size={30} className={styles.icon}/>:
                <BsMoon size={30} className={styles.iconLight}/>}
            </span>
        </div>
    )
}
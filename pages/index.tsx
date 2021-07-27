import Head from 'next/head'
import Image from 'next/image'
import Title from '../component/Tittle'
import Footer from '../component/Footer'
import Header from '../component/Header'

import {useMode } from '../contexts/ModeContext';

import styles from './home.module.scss'

export default function Home() {

  const {
    isDark
} = useMode()

  return (
   <div className={isDark? styles.container:styles.containerLight}>
     <Header/>
    <Title/>
    <Footer/>
   </div>
  )
}

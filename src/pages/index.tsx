import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import InputComponent from '../components/Input'

const Home: NextPage = () => {
  const [title, setTitle] = useState<string>()
  return (
    <div className={styles.container}>
      <Head>
        <title>meu curriculum vitae</title>
        <meta name="description" content="meu curriculum vitae" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.form}>
        <InputComponent 
          title='Título do Currículo'
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      <div className={styles.view}>{title}</div>
      
      </main>
    </div>
  )
}

export default Home

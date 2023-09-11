import Head from 'next/head'
import TodoList from '../components/TodoList'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {

  const getName = () => {
    fetch('api/hello').then((res)=>{
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getName()
  }, [])
  


  return (
    <div className={styles.container}>
      <Head>
        <title>TODO App122222</title>
        <meta name="description" content="TODO App using Next.js" />
      </Head>

      <main>
        <h1>TODO List</h1>
        <TodoList />
      </main>

    </div>
  )
}

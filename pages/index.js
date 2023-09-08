import Head from 'next/head'
import TodoList from '../components/TodoList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TODO App</title>
        <meta name="description" content="TODO App using Next.js" />
      </Head>

      <main>
        <h1>TODO List</h1>
        <TodoList />
      </main>

    </div>
  )
}

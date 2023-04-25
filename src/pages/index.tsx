import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import MainLayout from '../layout/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout title="GitHub - Blog">
      <h1 className={styles.title}>Blog - Home</h1>
      <p className={styles.title}>
        Sistema de Perfis do GitHub
      </p>
    </MainLayout>
  )
}

export default Home

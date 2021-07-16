import Head from 'next/head'
import { NextSeo } from 'next-seo'

import { Header } from '../components/Header'
import { MainForm } from '../components/MainForm'

import { AbsoluteHeader } from '../components/AbsoluteHeader'
import { ResponsiveHeader } from '../components/ResponsiveHeader'
import { AboutSection } from '../components/AboutSection'
import { InteriorShots } from '../components/InteriorShots'
import { PlantaBaixa } from '../components/PlantaBaixa'
import { Location } from '../components/Location'
import { Footer } from '../components/Footer'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>

      <NextSeo 
        title="Edifício Design"
        description="Apartamentos de 2 dormitórios, com 1 ou 2 vagas de garagem, além de infraestrutura completa de lazer e segurança."
        canonical="https://design.emiempreendimentos.com.br/"
        openGraph={{
          url: 'https://design.emiempreendimentos.com.br/',
          title: 'Edifício Design',
          description: 'O melhor endereço de apartamentos de 80m² a 103m² com 2 ou 3 suítes, áreas condominiais e de lazer no bairro Santana, a 2 minutos do Parque da Redenção.',
          images: [
            {
              url: '/images/home-bg-webp',
              width: 800,
              height: 600,
              alt: 'Edifício Design',
            }
          ]
        }}
      />

      <Head>
        <title>EMI | Design</title>
      </Head>

      <div className={styles.container} id="home">
        <Header />

        <ResponsiveHeader />

        <main className={styles.main}>
          <div className={styles.introductionText}>
            <p>EDIFÍCIO</p>
            <img src="/images/design-logo.png" alt="design"/>

            <h2><span>O MELHOR NEGÓCIO IMOBILIÁRIO DO</span></h2>

            <h1><span>MENINO DEUS.</span></h1>

            <h3><span>APARTAMENTOS DE 2 DORMITÓRIOS, <br /> COM 70m² E VAGAS DE GARAGEM.</span></h3> 
          </div>

          <MainForm />
        </main>
      </div>

      <AbsoluteHeader />
      <AboutSection />
      <InteriorShots />
      <PlantaBaixa />
      <Location />
      <Footer />
    </div>
  )
}

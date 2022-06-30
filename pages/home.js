import Head from 'next/head'
import Image from 'next/image'

import HomePageLayout from '../sections/HomePageLayout'
const ContainerStyle = 'm-auto bg-gray-200 h-screen'

export default function Home() {
  return (
    <div className={ContainerStyle}>
      <Head>
        <title>Garden App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <HomePageLayout />
      </main>

      <footer className="">
      
      </footer>
    </div>
  )
}
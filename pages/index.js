import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import { SliderData } from '../components/SliderData'
import Slider from '../components/Slider'
import Instagram from '../components/Instagram'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Hackstart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Hackstart France' message='The first French Hackworld' />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  )
}

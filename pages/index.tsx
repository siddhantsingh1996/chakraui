import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { Header } from '../components/layouts/Header'
import {Hero} from "../components/layouts/Hero"
import {LogoImage} from "../components/layouts/logoImage";
import {Feature} from "../components/layouts/Feature";
import {HeadlineSection} from "../components/layouts/HeadlineSection";
import {Client} from "../components/layouts/Client";
import {Classes} from "../components/layouts/Classes";
import {Footer} from "../components/layouts/Footer";



const Home: NextPage = () => {
  return (
   <>
   <Header/>
   <Hero/>
   <LogoImage/>
   <Feature/>
   <HeadlineSection/>
   <Client/>
   <Classes/>
   <Footer/>
   </>
  )
}


export default Home
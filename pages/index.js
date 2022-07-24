import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
export default function Home() {
  return (
    <>
      <Head>
        <title>Maplin World Group</title>
      </Head>
      <Nav />
      <div>
        <Intro />
        <Footer />
      </div>
    </>
  )
}
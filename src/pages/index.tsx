import EstiloGlobal from '../styles'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Sobre from './Sobre'
import Page from './Clientes'
import Contato from './Contato'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <EstiloGlobal />
      <Navbar />
      <Hero />
      <Sobre />
      <Page />
      <Contato />
      <Footer />
    </>
  )
}

export default Home

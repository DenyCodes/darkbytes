import EstiloGlobal from '../styles'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Sobre from './Sobre'
import Page from './Clientes'
import Contato from './Contato'
import Footer from './Footer'
import Make from './Make'

const Home = () => {
  return (
    <>
      <EstiloGlobal />
      <Navbar />
      <Hero />
      <Make />
      <Contato />
      <Footer />
    </>
  )
}

export default Home

import { About } from './styles'
import img from '../../images/img.png'
const Sobre = () => {
  return (
    <About>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h1>Transformamos ideias em experiências digitais impactantes.</h1>
        <p>
          Na Darkbytes, unimos design inteligente, performance e inovação para
          impulsionar negócios de todos os tamanhos. Nosso time é especializado
          em criar soluções digitais sob medida — desde sites institucionais e
          landing pages até sistemas e aplicativos personalizados, entregando
          experiências únicas e resultados mensuráveis.
        </p>
      </div>
    </About>
  )
}

export default Sobre

import { Sect, Ihero } from './styles'
import graf from '../../images/graf.png'
import graf2 from '../../images/graf2.png'
import graf3 from '../../images/graf3.png'
import seta from '../../images/seta.png'
import container from '../../images/Container.png'

const Hero = () => {
  return (
    <>
      <Sect>
        <h1>Sua empresa merece crescer de verdade</h1>
        <p>
          Estratégias personalizadas que entregam resultados reais. Não vendemos
          promessas, vendemos crescimento mensurável.
        </p>

        <div className="Cards">
          <div className="Card">
            <div className="icons">
              <img src={graf} alt="Gráfico de crescimento" />
            </div>
            <h2>300%</h2>
            <p>Aumento médio de vendas</p>
          </div>

          <div className="Card">
            <div className="icons">
              <img src={graf2} alt="Ícone de clientes" />
            </div>
            <h2>+200</h2>
            <p>Clientes satisfeitos</p>
          </div>

          <div className="Card">
            <div className="icons">
              <img src={graf3} alt="Retorno sobre investimento" />
            </div>
            <h2>4.5x</h2>
            <p>Retorno sobre investimento</p>
          </div>
        </div>
        <div className="buttons">
          <div className="btn">
            <h1>Quero Crescer Agora</h1>
            <img src={seta} alt="" />
          </div>
          <div className="btn2">
            <h1>Ver Resultados de Clientes</h1>
          </div>
        </div>
      </Sect>
      <Ihero>
        <img src="https://placehold.co/500x500" alt="" />
      </Ihero>
    </>
  )
}

export default Hero

import { Section } from './styles'
import Card from '../../components/Card'
const make = () => {
  return (
    <Section>
      <div>
        <div className="content">
          <h2>O QUE FAZEMOS</h2>
          <h1>Soluções completas para seu crescimento digital</h1>
          <p>
            Estratégias integradas que funcionam juntas para multiplicar seus
            resultados
          </p>
        </div>
      </div>
      <div>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Section>
  )
}
export default make

import { Div, GrupoDiv, HelpDiv, TF } from './styles'
import Vector2 from '../../images/Vector2.svg'

const Footer = () => {
  return (
    <>
      <HelpDiv>
        <GrupoDiv>
          <div>
            <img src={Vector2} alt="vec" />
          </div>
          <h4>Precisa de ajuda?</h4>
          <p>entre em contato</p>
          <h5> (21) 99345-0137</h5>
        </GrupoDiv>
        <br />
      </HelpDiv>
      <Div>
        <h1>Entre em contato</h1>
        <hr />
        <p>Rio de Janeiro - RJ</p>
      </Div>
      <TF>
        <h3>
          Desenvolvido por DarkBytes Soluções Digitais | Política de Privacidade
          | Política de Cookies
        </h3>
      </TF>
    </>
  )
}

export default Footer

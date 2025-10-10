import {
  AtendimentoDiv,
  Div,
  Facein,
  GrupoDiv,
  HelpDiv,
  InstaIcon,
  TF
} from './styles'
import Vector2 from '../../images/Vector2.svg'
import FaceIcon from '../../images/faceic.png'
import insta from '../../images/instaic.png'

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
        <Facein>
          <img src={FaceIcon} alt="" />
        </Facein>
        <InstaIcon>
          <img src={insta} alt="" />
        </InstaIcon>
        <AtendimentoDiv>
          <h1>horario de atendimento</h1>
          <hr />
          <p>
            Segunda a Sexta 09:00 - 22:00 Sábado domingo e feriado 09:00 - 13:00
          </p>
        </AtendimentoDiv>
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

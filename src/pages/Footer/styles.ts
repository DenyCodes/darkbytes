import styled from 'styled-components'
import Vector from '../../images/Vector.png'

export const Div = styled.div`
  width: 100%;
  min-height: 675px;
  background: linear-gradient(90deg, rgba(17, 17, 17, 0.85) 0%, #111 40.29%);
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 150px 1.5rem 2rem;
  box-sizing: border-box;

  hr {
    width: 300px;
    height: 1px;
    border: 1px solid #8f9495;
    margin-top: 20px;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    margin-top: 10px;
    max-width: 600px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 100px 1rem;
    text-align: center;

    hr {
      margin: 20px auto;
      width: 60%;
    }

    h1 {
      font-size: 1.6rem;
    }

    p {
      margin: 10px auto 0;
      max-width: 90%;
    }
  }

  @media (min-width: 1200px) {
    padding-left: 320px;
  }
`

export const TF = styled.div`
  width: 100%;
  height: 100px;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--www-figma-com-french-pass, #bedbff);
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 0 1rem;
  }
`

export const HelpDiv = styled.div`
  background-image: url(${Vector});
  background-color: #111;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 167px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 2rem 1.5rem;
  box-sizing: border-box;

  h4 {
    font-family: 'Segoe UI', sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin: 0 0 0.5rem 0;
  }

  p {
    font-family: 'Segoe UI', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
  }

  img {
    width: 32px;
    height: 29px;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;

    h4 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }

    img {
      margin: 0 auto 1rem;
    }
  }
`

export const GrupoDiv = styled.div`
  width: fit-content;
  margin: 40px auto;
  text-align: center;

  h4 {
    color: #8f9495;
    font-size: 14px;
    font-weight: 400;
  }

  p {
    color: #8f9495;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  }

  h5 {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 12px;
    }
    p,
    h5 {
      font-size: 16px;
    }
  }
`

export const Facein = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: #e67e30;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;

  img {
    width: 18px;
    height: 18px;
  }
`

export const InstaIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -40px auto 0;

  img {
    width: 18px;
    height: 18px;
  }
`

export const AtendimentoDiv = styled.div`
  position: relative;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  box-sizing: border-box;

  hr {
    width: 300px;
    height: 1px;
    border: 1px solid #8f9495;
    margin: 20px 0;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    max-width: 400px;
    margin-top: 10px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;

    hr {
      margin: 20px auto;
      width: 60%;
    }

    p {
      max-width: 90%;
    }
  }

  @media (min-width: 1200px) {
    padding-left: 35%;
  }
`

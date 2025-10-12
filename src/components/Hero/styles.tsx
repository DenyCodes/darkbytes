import styled from 'styled-components'
import Hero from '../../images/hero.jpg'
export const Sect = styled.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background:
    linear-gradient(97deg, rgba(0, 0, 0, 0) -1.38%, rgba(0, 0, 0, 0.83) -1.37%),
    url(${Hero}) lightgray 50% / cover no-repeat;
  color: #000;
  padding: 4rem 2rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;

  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #e67e30;
    max-width: 800px;
    width: 100%;
    line-height: 1.2;
  }

  p {
    color: #fff;
    font-size: 15px;
    margin-bottom: 2rem;
    max-width: 700px;
    width: 100%;
    text-transform: uppercase;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }

  button {
    background-color: #ff6600;
    color: #fff;
    border: none;
    padding: 0.9rem 1.8rem;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 6px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e65c00;
    }
  }

  /* Tablets */
  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }

  /* Desktops */
  @media (min-width: 1200px) {
    padding: 6rem 4rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 15px;
    }

    button {
      font-size: 1.15rem;
      padding: 1rem 2rem;
    }
  }
`

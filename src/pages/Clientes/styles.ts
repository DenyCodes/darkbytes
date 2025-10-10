import styled from 'styled-components'

export const Div = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  background-color: #000;
  color: #fff;
  padding: 4rem 1rem;
  text-align: center;

  font-size: 24px;
  font-weight: bold;
`

export const H1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 3rem;
  }
`

export const Imgs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 2rem;

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    gap: 30px;
    img {
      max-width: 350px;
    }
  }

  @media (min-width: 1200px) {
    gap: 40px;
    img {
      max-width: 400px;
    }
  }
`

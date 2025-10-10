import styled from 'styled-components'

export const About = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  margin: 120px auto;
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    color: #333;
  }

  p {
    max-width: 700px;
    font-size: 1.15rem;
    color: #666;
    margin-top: 1rem;
    line-height: 1.6;
  }

  /* Tablet */
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    gap: 3rem;
    height: auto;

    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.2rem;
      margin-top: 0;
    }
  }

  /* Desktop grande */
  @media (min-width: 1200px) {
    max-width: 1200px;
    padding: 3rem;
    gap: 4rem;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
`

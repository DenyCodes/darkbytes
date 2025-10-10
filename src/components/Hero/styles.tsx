import styled from 'styled-components'

export const Sect = styled.section`
  background-color: #f5f5f5;
  color: #000;
  padding: 4rem 2rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #e67e30;
    max-width: 800px;
    width: 100%;
    line-height: 1.2;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 700px;
    width: 100%;
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
      font-size: 1.25rem;
    }
  }

  /* Desktops */
  @media (min-width: 1200px) {
    padding: 6rem 4rem;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.3rem;
    }

    button {
      font-size: 1.15rem;
      padding: 1rem 2rem;
    }
  }
`

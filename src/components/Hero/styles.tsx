import styled from 'styled-components'

export const Sect = styled.section`
  background-color: #f5f5f5;
  color: #000;
  padding: 4rem 2rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #e67e30;
    width: 21em;
    margin-left: 10em;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  button {
    background-color: #ff6600;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: #e65c00;
    }
  }
`

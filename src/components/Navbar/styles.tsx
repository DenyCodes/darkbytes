import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border-bottom: 2px solid #444;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  text-align: center;
  position: relative;

  img {
    position: absolute;
    left: 112px;
    width: 115px;
    height: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-clip: padding-box;
  }

  h1 {
    margin: 0;
    font-size: 1.4rem;
    line-height: 1;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem 1.5rem;
  }

  li {
    cursor: pointer;
    transition: 150ms ease;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Tablet e desktop: layout em linha com centralização total */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50rem;

    h1 {
      font-size: 1.6rem;
    }

    ul {
      gap: 1rem 2rem;
    }
  }

  /* Desktop grande */
  @media (min-width: 1200px) {
    padding: 1rem 2rem;

    h1 {
      font-size: 1.8rem;
    }

    ul {
      gap: 1.25rem 2.5rem;
    }
  }
`

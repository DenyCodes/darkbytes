import styled from 'styled-components'
export const Nav = styled.nav`
  background-color: #000;
  color: white;
  padding: 1rem;
  border-bottom: 2px solid #444;

  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
    margin-left: 700px;
  }

  li {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

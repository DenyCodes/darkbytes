import styled from 'styled-components'

export const Div = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  font-weight: bold;
  background-color: #000;
  color: #fff;
`
export const H1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  padding-top: 114px;
  margin-top: 220px;
  text-align: center;
  margin-left: 20px;
`
export const Imgs = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  img {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }
`

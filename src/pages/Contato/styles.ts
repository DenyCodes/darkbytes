import styled from 'styled-components'

export const Div = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #f5f5f5;

  img {
    width: 100%;
    max-width: 450px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    object-fit: cover;
  }

  /* Desktop: imagem e formulário lado a lado */
  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    padding: 4rem 3rem;

    img {
      justify-self: end;
    }
  }
`

export const H1 = styled.h1`
  color: var(--title-color, #111);
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (min-width: 960px) {
    text-align: left;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  input,
  textarea {
    padding: 12px 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  input:focus,
  textarea:focus {
    border-color: #ff6600;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.2);
  }

  button {
    padding: 12px 16px;
    background-color: #ff6600;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e65c00;
    }
  }
`

export const SuccessMessage = styled.p`
  color: #15803d;
  font-size: 0.95rem;
  margin-top: 6px;
`

export const ErrorMessage = styled.p`
  color: #b91c1c;
  font-size: 0.95rem;
  margin-top: 6px;
`

export const Label = styled.label`
  font-size: 1rem;
  color: #333;
  font-weight: 600;
`

export const TextArea = styled.textarea`
  min-height: 120px;
  resize: vertical;
`

export const Input = styled.input`
  height: 44px;
`

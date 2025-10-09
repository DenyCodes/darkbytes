import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`

export const H1 = styled.h1`
  color: var(--title-color, #111);
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 307px;
  text-transform: uppercase;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;

  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    padding: 10px;
    background-color: #ff6600;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff6600;
    }
  }
`
export const SuccessMessage = styled.p`
  color: green;
  margin-top: 10px;
`
export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`
export const Label = styled.label`
  font-size: 1rem;
  color: #333;
`
export const TextArea = styled.textarea`
  height: 100px;
  resize: vertical;
`
export const Input = styled.input`
  height: 40px;
`

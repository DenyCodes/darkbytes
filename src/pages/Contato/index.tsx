import { Div, Form, H1, Label } from './styles'

const Contato = () => {
  return (
    <>
      <Div>
        <Form>
          <H1>entre em contato com nossa equipe</H1>
          <Label htmlFor="name"></Label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Nome"
          />

          <Label htmlFor="email"></Label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />

          <Label htmlFor="message"></Label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Mensagem"
          ></textarea>

          <button type="submit">Enviar</button>
        </Form>
        <div>
          <img src="https://placehold.co/500x500" alt="" />
        </div>
      </Div>
    </>
  )
}

export default Contato

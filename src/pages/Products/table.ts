import table from '../../images/table.png'
import bermuda1 from '../../images/bermuda1.png'
import bermuda2 from '../../images/bermuda2.png'
import jaquetas from '../../images/jaquetas.png'
import roupas1 from '../../images/roupas.png'
import roupas2 from '../../images/roupas2.png'
import roupas3 from '../../images/roupas3.png'

interface Produto {
  id: number
  nome: string
  imagem: string
  categoria: string
}

const produtosData: Produto[] = [
  { id: 1, nome: 'Bermuda 1', imagem: bermuda1, categoria: 'Bermudas' },
  { id: 2, nome: 'Bermuda 2', imagem: bermuda2, categoria: 'Bermudas' },
  { id: 3, nome: 'Bermuda 3', imagem: roupas3, categoria: 'Bermudas' },
  { id: 4, nome: 'Bermuda 4', imagem: roupas1, categoria: 'Bermudas' },
  { id: 5, nome: 'Camiseta Preta', imagem: jaquetas, categoria: 'Camisetas' },
  { id: 6, nome: 'Camiseta Branca', imagem: roupas2, categoria: 'Camisetas' },
  { id: 5, nome: 'Camiseta Preta', imagem: jaquetas, categoria: 'Camisetas' },
  { id: 6, nome: 'Camiseta Branca', imagem: roupas2, categoria: 'Camisetas' },
  { id: 7, nome: 'Blusa Slim', imagem: table, categoria: 'Roupas' },
  { id: 8, nome: 'Calça Jeans', imagem: roupas3, categoria: 'Roupas' },
  { id: 7, nome: 'Blusa Slim', imagem: table, categoria: 'Roupas' },
  { id: 8, nome: 'Calça Jeans', imagem: roupas3, categoria: 'Roupas' },
  { id: 9, nome: 'Camisa Social', imagem: table, categoria: 'Acessorios' },
  { id: 9, nome: 'Camisa Social', imagem: table, categoria: 'Acessorios' },
  { id: 9, nome: 'Camisa Social', imagem: table, categoria: 'Acessorios' },
  { id: 9, nome: 'Camisa Social', imagem: table, categoria: 'Acessorios' }
]

export default produtosData

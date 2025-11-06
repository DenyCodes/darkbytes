import React, { useState } from 'react'
import table from '../../images/table.png'
import * as S from './styles'

/* Tipos */
interface Produto {
  id: number
  nome: string
  imagem: string
  categoria: string
}

/* Dados completos */
const produtosData: Produto[] = [
  {
    id: 1,
    nome: 'Suporte Ergonômico',
    imagem: table,
    categoria: 'Acessórios Ergonômicos'
  },
  {
    id: 2,
    nome: 'Apoio de Monitor',
    imagem: table,
    categoria: 'Acessórios Ergonômicos'
  },
  {
    id: 3,
    nome: 'Biombo Acústico',
    imagem: table,
    categoria: 'Biombos'
  },
  {
    id: 4,
    nome: 'Estação Modular',
    imagem: table,
    categoria: 'Biombos'
  },
  {
    id: 5,
    nome: 'Estrutura Metálica Slim',
    imagem: table,
    categoria: 'Estruturas para Mesas'
  },
  {
    id: 6,
    nome: 'Pé Regulável',
    imagem: table,
    categoria: 'Estruturas para Mesas'
  },
  {
    id: 7,
    nome: 'Banco Urbano de Aço',
    imagem: table,
    categoria: 'Mobiliário Urbano'
  },
  {
    id: 8,
    nome: 'Lixeira Modular',
    imagem: table,
    categoria: 'Mobiliário Urbano'
  },
  {
    id: 9,
    nome: 'Perfil Estrutural 3x3',
    imagem: table,
    categoria: 'Perfis Metálicos'
  },
  {
    id: 10,
    nome: 'Perfil Tubular Reforçado',
    imagem: table,
    categoria: 'Perfis Metálicos'
  },
  {
    id: 11,
    nome: 'Mesa MRM Slim',
    imagem: table,
    categoria: 'Mesa MRM'
  },
  {
    id: 12,
    nome: 'Mesa MRM Industrial',
    imagem: table,
    categoria: 'Mesa MRM'
  }
]

/* Categorias derivadas */
const categorias = Array.from(new Set(produtosData.map((p) => p.categoria)))

/* Componente principal */
export default function ProdutosSection() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>(categorias[0])

  const produtosVisiveis = produtosData.filter(
    (p) => p.categoria === categoriaAtiva
  )

  return (
    <S.Section>
      <S.Wrapper>
        {/* Sidebar */}
        <S.Sidebar>
          <S.SideTitle>PRODUTOS</S.SideTitle>
          <S.CategoriesList>
            {categorias.map((cat) => (
              <S.CategoryItem
                key={cat}
                $active={categoriaAtiva === cat}
                onClick={() => setCategoriaAtiva(cat)}
              >
                {cat}
              </S.CategoryItem>
            ))}
          </S.CategoriesList>
        </S.Sidebar>

        {/* Conteúdo principal */}
        <S.Content>
          <S.Title>{categoriaAtiva}</S.Title>

          <S.Grid>
            {produtosVisiveis.map((prod) => (
              <S.Card key={prod.id}>
                <S.ImgWrap>
                  <S.ProductImg
                    src={prod.imagem}
                    alt={prod.nome}
                    onError={(e) => {
                      const target = e.currentTarget
                      target.onerror = null
                      target.src =
                        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='180'><rect width='100%' height='100%' fill='%23f5f5f7'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23bbb' font-size='16'>Imagem</text></svg>"
                    }}
                  />
                </S.ImgWrap>
                <S.CardBody>
                  <S.ProductName>{prod.nome}</S.ProductName>
                  <S.ActionBtn
                    onClick={() =>
                      alert(`Solicitar orçamento para: ${prod.nome}`)
                    }
                  >
                    SOLICITAR ORÇAMENTO
                  </S.ActionBtn>
                </S.CardBody>
              </S.Card>
            ))}
          </S.Grid>
        </S.Content>
      </S.Wrapper>
    </S.Section>
  )
}

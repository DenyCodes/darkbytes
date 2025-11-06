import React, { useState, useMemo } from 'react'
import * as S from './styles'
import produtosData from './table'

export default function ProdutosSection() {
  const categorias = useMemo(
    () => Array.from(new Set(produtosData.map((p) => p.categoria))),
    []
  )

  const [categoriaAtiva, setCategoriaAtiva] = useState(categorias[0])

  const produtosVisiveis = useMemo(
    () => produtosData.filter((p) => p.categoria === categoriaAtiva),
    [categoriaAtiva]
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
            {produtosVisiveis.map((prod, index) => (
              <S.Card key={`${prod.id}-${index}`}>
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

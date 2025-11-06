import styled from 'styled-components'

interface CategoryItemProps {
  $active?: boolean
}

export const Section = styled.section`
  width: 100%;
  padding: 40px 24px;
  background: #fcfbf8;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const Sidebar = styled.aside`
  width: 260px;
  background: #fff;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    overflow-x: auto;
    gap: 8px;
    padding: 10px;
    border-radius: 8px;

    /* melhora a experiência no mobile */
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const SideTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #222;
  margin-bottom: 12px;

  @media (max-width: 900px) {
    display: none;
  }
`

export const CategoriesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 900px) {
    display: flex;
  }
`

export const CategoryItem = styled.li<CategoryItemProps>`
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 8px;
  color: ${(p) => (p.$active ? '#fff' : '#333')};
  background: ${(p) => (p.$active ? '#e76b2f' : 'transparent')};
  border: ${(p) => (p.$active ? 'none' : '1px solid #eee')};
  transition: all 0.18s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    background: ${(p) => (p.$active ? '#cf5d24' : '#f5f5f5')};
  }

  @media (max-width: 900px) {
    margin-bottom: 0;
    flex: 0 0 auto;
  }
`

export const Content = styled.div`
  flex: 1;
  min-width: 0; /* evita overflow em telas pequenas */
`

export const Title = styled.h2`
  font-size: 22px;
  margin: 6px 0 20px;
  color: #111;
  font-weight: 800;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(16, 24, 40, 0.04);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-3px);
  }
`

export const ImgWrap = styled.div`
  background: #f5f5f7;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    height: 140px;
  }
`

export const ProductImg = styled.img`
  max-width: 100%;
  max-height: 140px;
  object-fit: contain;
  display: block;
`

export const CardBody = styled.div`
  padding: 14px;
  text-align: center;
`

export const ProductName = styled.h4`
  font-size: 16px;
  margin: 6px 0 12px;
  color: #0b0b0b;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`

export const ActionBtn = styled.button`
  background: #e76b2f;
  border: none;
  color: white;
  padding: 10px 12px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.2px;
  transition: all 0.12s ease;

  &:hover {
    background: #cf5d24;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px;
  }
`

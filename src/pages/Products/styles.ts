import styled from 'styled-components'

interface CategoryItemProps {
  $active?: boolean
}
export const Section = styled.section`
  width: 100%;
  padding: 40px 24px;
  background: #fcfbf8;
  box-sizing: border-box;
`

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const Sidebar = styled.aside`
  width: 260px;
  background: #fff;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    overflow-x: auto;
    gap: 8px;
  }
`

export const SideTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #222;
  margin-bottom: 12px;
`

export const CategoriesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
  transition:
    background 0.18s,
    color 0.18s,
    transform 0.08s;
  &:hover {
    transform: translateY(-2px);
  }
  white-space: nowrap;
`

export const Content = styled.div`
  flex: 1;
`

export const Title = styled.h2`
  font-size: 22px;
  margin: 6px 0 20px 0;
  color: #111;
  font-weight: 800;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
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
`

export const ImgWrap = styled.div`
  background: #f5f5f7;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  transition:
    background 0.12s,
    transform 0.08s;
  &:hover {
    background: #cf5d24;
    transform: translateY(-2px);
  }
`

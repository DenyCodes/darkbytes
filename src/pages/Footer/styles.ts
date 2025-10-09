import styled from 'styled-components'
import Vector from '../../images/Vector.png'

export const Div = styled.div`
  width: 1920px;
  height: 675px;
  flex-shrink: 0;
  background: linear-gradient(90deg, rgba(17, 17, 17, 0.85) 0%, #111 40.29%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`
export const TF = styled.div`
  width: 1920px;
  height: 100px;
  flex-shrink: 0;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  color: var(--www-figma-com-french-pass, var(--color-azure-87, #bedbff));
  text-align: center;

  /* www.figma.com/Segoe UI/Regular */
  font-family: var(--font-family-Font-1, 'Segoe UI');
  font-size: var(--font-size-12, 12px);
  font-style: normal;
  font-weight: var(--font-weight-400, 400);
  line-height: var(--item-spacing-16, 16px); /* 133.333% */
`
export const HelpDiv = styled.div`
  background-image: url(${Vector});
  background-color: #111;
  width: 1920px;
  height: 167px;
  color: #fff;

  h4 {
    /* www.figma.com/Segoe UI/SemiBold */
    font-family: var(--font-family-Font-1, 'Segoe UI');
    font-size: var(--font-size-24, 24px);
    font-style: normal;
    font-weight: var(--font-weight-600, 600);
    line-height: var(--item-spacing-32, 32px); /* 133.333% */
  }

  p {
    /* www.figma.com/Segoe UI/Regular */
    font-family: var(--font-family-Font-1, 'Segoe UI');
    font-size: var(--font-size-16, 16px);
    font-style: normal;
    font-weight: var(--font-weight-400, 400);
    line-height: var(--item-spacing-24, 24px); /* 150% */
  }
`

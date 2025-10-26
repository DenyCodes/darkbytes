import styled from 'styled-components'

export const Sect = styled.section`
  .img-hero {
    position: absolute;
    left: 65%;
    top: 200px;
  }
  .buttons {
    display: flex;
    gap: 20px;
    margin-top: 40px;
  }
  .btn {
    width: 220px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #e34d0e;
    h1 {
      margin-top: 20px;
      color: #ffffff;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .btn2 {
    border: 2px solid #d1d5dc;
    width: 220px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #fff;
    h1 {
      margin-top: 20px;
      color: #000;
      font-size: 14px;
      font-weight: 600;
    }
  }
  margin-top: 180px;
  margin-left: 200px;
  max-width: 650px;

  h1 {
    font-size: 56px;
    font-weight: 600;
    color: #111827;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 50px;
  }

  .Cards {
    display: flex;
    gap: 20px;
  }

  .Card {
    background: #ffffff;
    border: 1px solid #f3f4f6;
    border-radius: 14px;
    width: 242px;
    height: 118px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 12px;
    transition:
      box-shadow 0.3s ease,
      transform 0.3s ease;

    &:hover {
      box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
      transform: translateY(-3px);
    }

    .icons {
      width: 24px;
      height: 24px;
      margin-top: 10px;
      display: relative;
    }

    h2 {
      font-size: 24px;
      font-weight: 400;
      color: #111827;
      margin: 0 0 4px 0;
    }

    p {
      font-size: 12px;
      color: #6b7280;
      margin: 0;
    }
  }
`
export const Ihero = styled.div`
  position: absolute;
  left: 65%;
  top: 200px;
`

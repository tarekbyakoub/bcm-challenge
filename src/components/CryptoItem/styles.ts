import Image from "next/image";
import styled from "styled-components";
import { CryptoCurrency } from "./CryptoItem";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  font-weight: bold;
  overflow: hidden;
  font-weight: 400;
  height: 70px;
  border-bottom: 1px solid #e5e5e5;

  @media screen and (max-width: 744px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    height: 70px;
    padding: 0;
  }

  > span:nth-of-type(1) {
    grid-column-start: 1;
  }

  > span:nth-of-type(2) {
    grid-column-start: 2;
  }

  > span:nth-of-type(3) {
    grid-column-start: 3;
  }

  .star-icon {
    grid-column-start: 5;
    align-self: center;
    @media screen and (max-width: 744px) {
      grid-column-start: 4;
    }
  }

  & > svg {
    justify-self: center;
  }
`;

export const CryptoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NameContainer = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  > span:nth-of-type(1) {
    @media screen and (max-width: 744px) {
      display: none;
    }
  }
`;

export const CryptoChange24 = styled.span<{ crypto: CryptoCurrency }>`
  color: ${({ crypto }) => (crypto?.change24?.percentage > 0 ? "lime" : "red")};
`;

export const CryptoIcon = styled(Image)`
  margin-right: 5px;
  border-radius: 50%;
`;

export const CryptoDataContainer = styled.div`
  display: flex;
  align-items: center;
  place-self: center;
  :last-of-type {
    display: none;
  }
`;

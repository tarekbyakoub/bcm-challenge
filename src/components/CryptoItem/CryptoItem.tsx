import { AiOutlineStar } from "react-icons/ai";
import {
  CryptoChange24,
  CryptoContainer,
  CryptoDataContainer,
  CryptoIcon,
  GridContainer,
  NameContainer,
} from "./styles";

export interface CryptoCurrency {
  currencyId: number;
  ticker: string;
  name: string;
  minimumBuy: number;
  minimumSend: number;
  buyPrice: number;
  sellPrice: number;
  lastPrice: number;
  volume: number;
  volume24: number;
  apy: number;
  withdrawalTag: boolean;
  depositTag: boolean;
  isStakeable: boolean;
  logo: string;
  description: string;
  change24: {
    percentage: number;
    absolute: number;
  };
}

export default function CyptoItem(crypto: CryptoCurrency) {
  return (
    <GridContainer className="grid-container crypto-item">
      <CryptoContainer>
        <CryptoIcon
          src={crypto.logo}
          width={36}
          height={36}
          alt={`${crypto.name} logo`}
        />
        <NameContainer className="name-container">
          <span className="crypto-name">{crypto.name}</span>
          <span className="crypto-ticker">{crypto.ticker}</span>
        </NameContainer>
      </CryptoContainer>
      <CryptoDataContainer>
        <span>{crypto.buyPrice.toFixed(4)}</span>
      </CryptoDataContainer>
      <CryptoDataContainer>
        <CryptoChange24 crypto={crypto.change24?.percentage}>
          {crypto.change24?.percentage > 0
            ? `+${crypto.change24?.percentage}%`
            : `${crypto.change24?.percentage}%`}
        </CryptoChange24>
      </CryptoDataContainer>
      <CryptoDataContainer>
        <span>{(crypto.volume * crypto.buyPrice).toFixed(2)}</span>
      </CryptoDataContainer>
      <AiOutlineStar className="star-icon" />
    </GridContainer>
  );
}

import React, { useState, useEffect } from "react";
import cryptoData from "../../pages/api/currencyJson.json";
import CryptoItem, { CryptoCurrency } from "../CryptoItem/CryptoItem";
import SearchBar from "../SearchBar/SearchBar";
import TabsComponent from "../Tabs/TabsComponent";
import { Container } from "../../styles/sharedstyles";
import {
  GridContainer,
  InnerContainer,
  Pagination,
  PaginationContainer,
  SortButton,
  TitleContainer,
} from "./styles";

export default function CryptoList() {
  const [cryptos, setCryptos] = useState<CryptoCurrency[]>([]);
  const [sortCriteria, setSortCriteria] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [pageNumber, setPageNumber] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<string>("All Assets");

  useEffect(() => {
    setCryptos(cryptoData.data);
  }, []);

  useEffect(() => {
    setPageNumber(0);
  }, [searchTerm]);

  function handleSort(criteria: string) {
    if (criteria === sortCriteria) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortDirection("asc");
    }
  }

  const sortedCryptos = cryptos
    .filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crypto.ticker.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a: any, b: any) => {
      let sortValue;
      if (sortCriteria === "name") {
        sortValue = a.name.localeCompare(b.name);
      } else if (sortCriteria === "buyPrice") {
        sortValue = a.buyPrice - b.buyPrice;
      } else if (sortCriteria === "change24") {
        sortValue = a.change24.percentage - b.change24.percentage;
      } else if (sortCriteria === "market") {
        sortValue = a.volume * a.buyPrice - b.volume * b.buyPrice;
      }

      if (sortDirection === "desc") {
        sortValue *= -1;
      }

      return sortValue;
    });

  const offset = pageNumber * perPage;
  const currentPageData = sortedCryptos.slice(offset, offset + perPage);
  const pageRangeDisplayed =
    pageNumber === 0 ? 5 : pageNumber == 1 ? 5 : pageNumber === 2 || 3 ? 4 : 5;

  function handlePageClick({ selected }: { selected: number }) {
    setPageNumber(selected + 1);
  }

  function handleSearch() {
    setPageNumber(0);
  }

  return (
    <Container className="container">
      <TitleContainer className="title-container">
        <h1>Trade</h1>
      </TitleContainer>
      <InnerContainer className="inner-container">
        <h1>Categories</h1>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={handleSearch}
        />
        <TabsComponent
          onSelectTab={(tabName: string) => setActiveTab(tabName)} // set activeTab state when tab is clicked
        />
        <GridContainer className="grid-container">
          <SortButton className="text-left" onClick={() => handleSort("name")}>
            <p>Name</p>
          </SortButton>
          <SortButton
            className="text-left"
            onClick={() => handleSort("buyPrice")}
          >
            <p>Buy Price</p>
          </SortButton>
          <SortButton
            className="text-left"
            onClick={() => handleSort("change24")}
          >
            <p>24h%</p>
          </SortButton>

          <SortButton
            className="text-left"
            onClick={() => handleSort("market")}
          >
            <p>Market</p>
          </SortButton>
        </GridContainer>
        {currentPageData.map((crypto) => (
          <CryptoItem key={crypto.currencyId} {...crypto} />
        ))}
        <PaginationContainer>
          <Pagination
            pageCount={Math.ceil(sortedCryptos.length / perPage)}
            marginPagesDisplayed={0}
            pageRangeDisplayed={pageRangeDisplayed}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            activeClassName="active"
          />
        </PaginationContainer>
      </InnerContainer>
    </Container>
  );
}

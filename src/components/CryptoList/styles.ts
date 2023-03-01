import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #f4f5f6;
  @media screen and (max-width: 744px) {
    width: 100vw;
  }
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  min-width: 744px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media screen and (max-width: 744px) {
    padding: 24px 32px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  font-weight: bold;
  border-radius: 8px;
  overflow: hidden;
  text-overflow: clip;

  @media screen and (max-width: 744px) {
    grid-template-columns: repeat(4, 1fr);
  }

  > button:nth-of-type(1) {
    grid-column-start: 1;
  }

  > button:nth-of-type(2) {
    grid-column-start: 2;
    place-self: center;
  }

  > button:nth-of-type(3) {
    grid-column-start: 3;
    place-self: center;
  }

  > button:nth-of-type(4) {
    grid-column-start: 4;
    place-self: center;

    @media screen and (max-width: 744px) {
      display: none;
    }
  }
`;

export const SortButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
  color: #a1a6b6;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  height: 40px;

  &:hover {
    text-decoration: underline;
  }

  &.text-left {
    text-align: left;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const Pagination = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  margin: 0 auto;
  padding: 0;

  li {
    margin: 0 5px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
    font-size: 14px;
    border: 2px solid #f1f1f1;
    border-radius: 4px;

    &.active {
      border: 2px solid #6464ec;
    }

    &:hover:not(.active) {
      background-color: #f1f1f1;
    }
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    outline: none;
  }

  .break {
    visibility: hidden;
  }

  .previous,
  .next {
    visibility: hidden;
  }
`;

import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;

  @media screen and (max-width: 744px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: none;
  background-color: #fff;
  border: 2px solid #e6e8ec;
  border-radius: 8px;
  flex: 1;
  font-size: 16px;
  height: 54px;
  color: #333;

  &:focus {
    outline: none;
  }
`;

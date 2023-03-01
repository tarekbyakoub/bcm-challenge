import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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

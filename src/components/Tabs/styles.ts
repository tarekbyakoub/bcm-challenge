import styled from "styled-components";
import { Tabs } from "react-bootstrap";

export const StyledTabs = styled(Tabs)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: none;
  list-style: none;
  margin-bottom: 2vh;
  padding: 0;

  @media screen and (max-width: 744px) {
    max-width: 100vw;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .nav-link {
    border: none;
    background-color: #fff;
    color: #6d7589;
    font-weight: 600;
    font-size: 14px;
    line-height: 14.7px;
    letter-spacing: 1px;
    padding: 12px;
    border-radius: 38px;

    &:hover {
      background-color: #f4f5f6;
    }

    &.active {
      background-color: #2e333f;
      color: #fff;
    }
  }

  button {
    :first-of-type {
      width: 102px;
    }
  }
`;

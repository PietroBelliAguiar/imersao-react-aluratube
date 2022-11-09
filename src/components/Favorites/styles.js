import styled from "styled-components";

export const StyledFavorites = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  .favoritos {
    width: 100%;
    padding: 16px;
    overflow: hidden;
    .items-container {
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(120px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: auto;
      margin-bottom: 50px;
      > a {
        display: block;
        width: fit-content;
        text-align: center;
        > span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
        > img {
          border-radius: 50%;
          width: 100px;
        }
      }
    }
  }
`;

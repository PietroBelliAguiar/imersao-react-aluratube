import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1 ?? "#FFFFFF"};;

  img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 12px;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
  }
`;

export const Banner = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 230px;
    background-image: url(${(props) => props.bgImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
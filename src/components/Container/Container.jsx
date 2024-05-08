import styled from "styled-components";

const Container = styled.div`
  padding: 0 3%;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1254px) {
    width: 990px;
  }

  @media screen and (max-width: 991px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 575px;
  }

  @media screen and (max-width: 575px) {
    width: 100%;
    padding: 0 15px;
  }
`;

export default Container;

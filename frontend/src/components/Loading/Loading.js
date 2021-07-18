import React from "react";
import styled from "styled-components";
import oclogo from "../../images/oc-logo.png";

const Loading = ({ children }) => {
  return (
    <LoadingStyle>
      <h3>{children}</h3>
      <Logo src={oclogo} />
    </LoadingStyle>
  );
};

export default Loading;

const Logo = styled.img`
  width: 107px;
  height: 20px;
`;

const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-top: 30vh;
`;

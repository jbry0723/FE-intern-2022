import React from "react";
import styled from "styled-components";

const ImgContainerDiv = styled.div`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  vertical-align: middle;
  img {
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
`;

const ImgContainer = (props) => {
  const { imgData } = props;

  return (
    <ImgContainerDiv>
      <img src={imgData.url} alt={imgData.explanation}></img>
    </ImgContainerDiv>
  );
};

export default ImgContainer;

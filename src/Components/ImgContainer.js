import React from "react";
import styled from "styled-components";

const ImgContainerDiv = styled.div`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  vertical-align: middle;
  iframe{
    width: 1100px;
    height:619px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  img {
    width: 1100px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
`;

const ImgContainer = (props) => {
  const { imgData } = props;
  console.log(imgData)

  if (imgData.media_type==="image")
  {

  return (
    <ImgContainerDiv>
      <img src={imgData.url} alt={imgData.explanation}></img>
    </ImgContainerDiv>
  );
};

return (
  <ImgContainerDiv>
    <iframe title={imgData.title} src={imgData.url} alt={imgData.explanation}></iframe>
  </ImgContainerDiv>
);
};






export default ImgContainer;

import React from "react";
import styled from "styled-components";
import ImgContainer from "./ImgContainer";
import TitleDesc from "./TitleDesc";


const PictureCardDiv = styled.div`
  border-radius: 25px;
  border-radius: 25px;
  background-color: #ffffff;
  padding: 0rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 1100px;
  box-shadow: 0px 2px #eaeaeb;
  border-left: 3px solid #eaeaeb;
  border-right: 3px solid #eaeaeb;
`;

const PictureCard = (props) => {
  const { imgData, updateImages } = props;
  return (
   
    <PictureCardDiv>
      <ImgContainer imgData={imgData} />
      <TitleDesc imgData={imgData} />
    </PictureCardDiv>
    
  );
};

export default PictureCard;

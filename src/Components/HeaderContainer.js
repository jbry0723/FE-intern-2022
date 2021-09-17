import React from "react";
import styled from "styled-components";
import PictureCard from "./PictureCard";

const HeaderContainerDiv = styled.div`
  background-color: #f3f3f4;
  p1 {
    color: grey;
  }
`;

const HeaderContainer = (props) => {
  const { imgData } = props;

  return (
    <HeaderContainerDiv>
      <h1>Spacestagram</h1>
      <p1>Brought to you by NASA's Astronomy Photo of the Day (APOD) API </p1>
      <PictureCard imgData={imgData}></PictureCard>
    </HeaderContainerDiv>
  );
};

export default HeaderContainer;

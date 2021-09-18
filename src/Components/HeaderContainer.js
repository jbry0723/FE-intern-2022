import React from "react";
import styled from "styled-components";
import PictureCard from "./PictureCard";
import InfiniteScroll from "react-infinite-scroll-component";


const HeaderContainerDiv = styled.div`
  background-color: #f3f3f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  h1 {
    align-self: flex-start;
  }
  p1 {
    color: grey;
    align-self: flex-start;
  }
  p2 {
    display: block;
  }
`;

const LoadingHeaderContainerDiv = styled.div`
  background-color: #f3f3f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  height:100vh;
  h1 {
    align-self: flex-start;
  }
  p1 {
    color: grey;
    align-self: flex-start;
  }
  p2 {
    display: block;
    margin-bottom:3rem;
  }
`;

const HeaderContainer = (props) => {
  const { imgData, isLoading, updateImages } = props;

  if (isLoading) {
    return (
      <div>
        <LoadingHeaderContainerDiv>
          <h1>Spacestagram</h1>
          <p1>
            Brought to you by NASA's Astronomy Photo of the Day (APOD) API{" "}
          </p1>
          <p2>Loading, please wait...</p2>
          <img src={require('../Icons/loading_s.gif')} alt="Loading Icon"></img>
        </LoadingHeaderContainerDiv>
       
      </div>
    );
  }

  return (
    <HeaderContainerDiv>
      <h1>Spacestagram</h1>
      <p1>Brought to you by NASA's Astronomy Photo of the Day (APOD) API </p1>

      <InfiniteScroll
          dataLength={imgData.length}
          next={updateImages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
    
    >
      {imgData.map((entry) => {
        return <PictureCard updateImages={updateImages} imgData={entry}></PictureCard>;
      })}
      </InfiniteScroll>
    </HeaderContainerDiv>
  );
};

export default HeaderContainer;

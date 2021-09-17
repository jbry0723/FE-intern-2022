import React from "react";
import styled from "styled-components";

const TitleDescDiv = styled.div`
  h2 {
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  button {
      font-weight:550;
      margin-left: 1.8rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      background-color:white;
      border:1px solid #cacdd0;
      border-radius: 3px;
      padding:.6rem 1rem .6rem 1rem;
      
  }
  button:active{
      background-color: #e5e5e5;
      box-shadow: inset 0px 0px 5px #c1c1c1;
      outline:none;
      color:#a6a6a6;
  }
  }
  .imgDesc {
    display: block;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 0rem;
    color: black;
    font-weight: 450;
  }
`;

const TitleDesc = (props) => {
  const { imgData } = props;

  return (
    <TitleDescDiv>
      <h2>
        {imgData.title} - {imgData.date}
      </h2>
      <p1 className="imgDesc">{imgData.explanation}</p1>
      <button>Like</button>
    </TitleDescDiv>
  );
};

export default TitleDesc;

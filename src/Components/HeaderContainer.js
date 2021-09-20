import React from "react";
import styled from "styled-components";
import PictureCard from "./PictureCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { parseISO, format } from "date-fns";

const HeaderContainerDiv = styled.div`
  background-color: #f3f3f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;

  @media (max-width: 1024px) {
    width: 100%;
  }
  h1 {
    align-self: flex-start;
    @media (max-width: 1024px) {
      align-self: center;
    }
  }
  p1 {
    color: grey;
    align-self: flex-start;
    margin-bottom: 1rem;
    @media (max-width: 1024px) {
      align-self: center;
      margin-left: 5%;
      margin-right: 5%;
    }
  }
  p2 {
    display: block;
  }
  .dateDiv {
    margin-top: 1rem;
    display: inline;
    width: min-content;
  }

  .react-datepicker-wrapper dateWrapper {
    width: 600px;
    background-color: red;
  }

  .react-datepicker__input-container {
    display: block;
  }
`;
const LoadingHeaderContainerDiv = styled.div`
  background-color: #f3f3f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  height: 100vh;
  @media (max-width: 1024px) {
    width: 100%;
  }
  h1 {
    align-self: flex-start;
    @media (max-width: 1024px) {
      align-self: center;
    }
  }
  p1 {
    color: grey;
    align-self: flex-start;
    margin-bottom: 1rem;
    margin-left: 5%;
    margin-right: 10%;

    @media (max-width: 1024px) {
      align-self: center;
    }
  }
  p2 {
    display: block;
    margin-top: 1rem;
    @media (max-width: 1024px) {
      align-self: center;
    }
  }
  img {
    margin-top: 1.5rem;

    @media (max-width: 1024px) {
      content: url("https://i.gifer.com/ZZ5H.gif");
    }
  }
`;

const HeaderContainer = (props) => {
  const { imgData, isLoading, setDate, date } = props;

  if (isLoading) {
    return (
      <div>
        <LoadingHeaderContainerDiv>
          <h1>Spacestagram</h1>
          <p1>
            Brought to you by NASA's Astronomy Photo of the Day (APOD) API.
          </p1>
          <p2>Loading, please wait...</p2>
          <img src={require("../Icons/loading_s.gif")} alt="Loading Icon"></img>
        </LoadingHeaderContainerDiv>
      </div>
    );
  }

  return (
    <HeaderContainerDiv>
      <h1>Spacestagram</h1>
      <p1>Brought to you by NASA's Astronomy Photo of the Day (APOD) API. </p1>
      <div className="dateDiv">
        <label for="Datepicker">Select a date (optional):</label>
        <DatePicker
          className="datePicker"
          selected={parseISO(date)}
          dateFormat="yyyy/MM/dd"
          onChange={(selectedDate) =>
            setDate(format(selectedDate, "yyyy-MM-dd"))
          }
          maxDate={new Date()}
          wrapperClassName="dateWrapper"
        />
      </div>
      {imgData.map((entry) => {
        return (
          <PictureCard
            key={imgData.indexOf(entry)}
            imgData={entry}
          ></PictureCard>
        );
      })}
    </HeaderContainerDiv>
  );
};

export default HeaderContainer;

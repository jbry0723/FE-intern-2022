import React, { useState } from "react";
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

  .datePicker {
  }

  .dateWrapper {
  }
  .dateDiv {
    margin-top: 1rem;
    display: inline;
    align-self: center;
    width: min-content;
  }
`;
const LoadingHeaderContainerDiv = styled.div`
  background-color: #f3f3f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  height: 100vh;
  h1 {
    align-self: flex-start;
  }
  p1 {
    color: grey;
    align-self: flex-start;
  }
  p2 {
    display: block;
    margin-top: 40px;
  }
  img {
    margin-top: 40px;
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
            Brought to you by NASA's Astronomy Photo of the Day (APOD) API{" "}
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
      <p1>Brought to you by NASA's Astronomy Photo of the Day (APOD) API </p1>
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

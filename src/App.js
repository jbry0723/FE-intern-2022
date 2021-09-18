import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import moment from "moment";
import HeaderContainer from "./Components/HeaderContainer";
import styled from "styled-components";

const BASE_URL = "https://api.nasa.gov/planetary/apod?";
const currentDate = moment().format("YYYY-MM-DD");
const nasaKey = "gchmnzUhxntLeN5dKZdO7i22j2Zy2aZyZu8LiPiT";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f4;
`;

function App() {
  const [imgData, setImgData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `${BASE_URL}start_date=2021-08-25&end_date=2021-08-31&api_key=${nasaKey}`
        )
        .then((res) => {
          setImgData(res.data.reverse());
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("error");
        });
    };
    fetchData();
  }, []);

  function updateImages() {
    axios
      .get(
        `${BASE_URL}start_date=2021-08-14&end_date=2021-08-24&api_key=${nasaKey}`
      )
      .then((res) => {
        setImgData([...imgData, ...res.data.reverse()]);
      })
      .catch((err) => {
        console.log("error");
      });
  }

  return (
    <StyledBody>
      <HeaderContainer
        updateImages={updateImages}
        isLoading={isLoading}
        imgData={imgData}
      />
    </StyledBody>
  );
}

export default App;

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

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${BASE_URL}date=2021-08-26&api_key=${nasaKey}`)
        .then((res) => {
          console.log(res);
          setImgData(res.data);
        })
        .catch((err) => {
          console.log("error");
        });
    };
    fetchData();
  }, []);

  return (
    <StyledBody>
      <HeaderContainer imgData={imgData} />
    </StyledBody>
  );
}

export default App;

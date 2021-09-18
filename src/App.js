import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import HeaderContainer from "./Components/HeaderContainer";
import styled from "styled-components";
import { format, subDays, parseISO } from "date-fns";
import InfiniteScroll from "react-infinite-scroll-component";

const BASE_URL = "https://api.nasa.gov/planetary/apod?";
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
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [scrollCount, setScrollCount] = useState(1);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `${BASE_URL}start_date=${format(
            subDays(parseISO(date), 8),
            "yyyy-MM-dd"
          )}&end_date=${date}&api_key=${nasaKey}`
        )
        .then((res) => {
          setImgData(res.data.reverse());
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("error", err);
        });
    };
    fetchData();
  }, [date]);

  function updateImages() {
    axios
      .get(
        `${BASE_URL}start_date=${format(
          subDays(parseISO(date), scrollCount * 7 + 7 + 1),
          "yyyy-MM-dd"
        )}&end_date=${format(
          subDays(parseISO(date), scrollCount * 7 + 2),
          "yyyy-MM-dd"
        )}&api_key=${nasaKey}`
      )
      .then((res) => {
        setImgData([...imgData, ...res.data.reverse()]);
        setScrollCount(scrollCount + 1);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  if (isLoading) {
    return (
      <StyledBody>
        <HeaderContainer isLoading={isLoading} imgData={imgData} />
      </StyledBody>
    );
  }

  return (
    <InfiniteScroll
      dataLength={imgData.length}
      next={updateImages}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      scrollThreshold={0.9}
    >
      <StyledBody>
        <HeaderContainer
          isLoading={isLoading}
          imgData={imgData}
          setDate={setDate}
          date={date}
        />
      </StyledBody>
    </InfiniteScroll>
  );
}

export default App;

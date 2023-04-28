import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { black, white } from "../../styles/colors";

export const LikedListContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  background-color: ${black};
  overflow-y: hidden;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;
  width: 30vw;
`;

export const TitleP = styled.p`
  color: ${white};
  font-size: 2.5vw;
  font-family: "Kim jung chul Myungjo";
  font-weight: 700;
  margin: 0;
`;

export const TitleHr = styled.hr`
  width: 45%;
  margin-top: 0;
`;

export const SwiperSettings = {
  spaceBetween: 15,
  scrollbar: {
    draggable: true,
  },
  // loop: true,
  slidesPerView: 4,
};

export const SwiperTitle = styled.p`
  color: ${white};
  text-align: center;
`;

export const SwiperDiv = styled.div`
  width: 20vw;
  height: 75vh;
`;

export const SwiperImgDiv = styled.div`
  width: 100%;
`;

export const SwiperImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  filter: drop-shadow(5px 3px 3px #424242);
`;

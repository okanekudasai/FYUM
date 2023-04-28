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
  overflow-x: hidden;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-top: 15vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;
  width: 30vw;
`;

export const TitleP = styled.p`
  color: ${white};
  font-size: 3vw;
  font-family: "Kim jung chul Myungjo";
  font-weight: 700;
  margin: 0;
`;

export const TitleHr = styled.hr`
  width: 50%;
  margin-top: 0;
`;

export const SwiperSettings = {
  spaceBetween: 20,
  scrollbar: {
    draggable: true,
  },
  loop: true,
  slidesPerView: 3,
};

export const SwiperTitle = styled.p`
  color: ${white};
  text-align: center;
`;

export const SwiperDiv = styled.div`
  width: 25vw;
  height: 50vh;
`;

export const SwiperImgDiv = styled.div`
  vertical-align: center;
  width: 100%;
`;

export const SwiperImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

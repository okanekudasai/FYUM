import { Swiper, SwiperSlide } from "swiper/react";
import {
  LikedListContainer,
  TitleContainer,
  TitleP,
  TitleHr,
  SwiperSettings,
  SwiperDiv,
  SwiperImgDiv,
  SwiperTitle,
  SwiperImg,
} from "./styles";
// 더미 데이터
import dummy from "../../assets/dummyImg/liked.json";

interface DummyInfo {
  paintingId: number;
}
const LikedListPage = () => {
  const paintings = dummy.paintings;

  return (
    <LikedListContainer>
      <TitleContainer>
        <TitleP>Liked List</TitleP>
        <TitleHr />
      </TitleContainer>
      <Swiper {...SwiperSettings}>
        {paintings.map((paintings) => (
          <SwiperSlide key={paintings.paintingId}>
            <SwiperDiv>
              <SwiperImgDiv>
                <SwiperImg src={paintings.imcSrc} />
              </SwiperImgDiv>
              <SwiperTitle>{paintings.title}</SwiperTitle>
            </SwiperDiv>
          </SwiperSlide>
        ))}
      </Swiper>
    </LikedListContainer>
  );
};

export default LikedListPage;

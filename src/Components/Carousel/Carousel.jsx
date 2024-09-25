import {
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useRef } from "react";
import {
  IconArrowBadgeRightFilled,
  IconArrowBadgeLeftFilled,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import CardComponent from "../CardComponent/CardComponent";

function Carousel({ label, data }) {
  const swiperRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const slideNext = () => swiperRef.current?.slideNext();
  const slidePrev = () => swiperRef.current?.slidePrev();
  return (
    <div style={{ marginBottom: "40px" }}>
      <Flex justify="space-between" align="center">
        <Title order={2} my="md">
          {label}
        </Title>
        <Group gap="xs" visibleFrom="md">
          <Button onClick={slidePrev} radius="lg">
            <IconArrowBadgeLeftFilled />
          </Button>
          <Button onClick={slideNext} radius="lg">
            <IconArrowBadgeRightFilled />
          </Button>
        </Group>
      </Flex>
      <Swiper
        spaceBetween={20}
        slidesPerView={isMobile ? 1.5 : 3.5}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <CardComponent
              component={Link}
              to={`/service/${slide.slug}`}
              data={slide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;

import {
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";

function Carousel({ data }) {
  const swiperRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const slideNext = () => swiperRef.current?.slideNext();
  const slidePrev = () => swiperRef.current?.slidePrev();
  return (
    <div style={{ marginBottom: "40px" }}>
      <Flex justify="space-between" align="center">
        <h1>Featured Services</h1>
        <Group gap="xs" visibleFrom="md">
          <Button onClick={slidePrev} radius="lg">
            &lt;
          </Button>
          <Button onClick={slideNext} radius="lg">
            &gt;
          </Button>
        </Group>
      </Flex>
      <Swiper
        spaceBetween={20}
        slidesPerView={isMobile ? 1.5 : 3.5}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((slide, index) => (
          <SwiperSlide key={index}>
            <Card
              shadow="sm"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/service/66867b87656e8bd02d5077e9.webp"
                  h={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text
                fw={500}
                size="lg"
                mt="md"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                You&apos;ve won a million dollars in cash!
              </Text>
              <Text c="dimmed" size="xs">
                By Jane's Plumbing
              </Text>
              <Text fw={500} size="lg" c="blue">
                Rs 1500
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;

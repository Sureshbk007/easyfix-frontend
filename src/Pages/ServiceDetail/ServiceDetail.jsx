import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function ServiceDetail() {
  const [service, setService] = useState({});
  const { slug } = useParams();

  const getNextDays = (n) => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < n; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const day = date.toLocaleDateString("en-US", { weekday: "short" });
      const dayNumber = date.getDate();
      days.push({ day: day, date: dayNumber.toString() });
    }
    return days;
  };

  const dateOptions = getNextDays(7);
  const timeOptions = ["Op 1", "Op 2", "Op 3"];
  const [selectedDate, setSelectedDate] = useState(dateOptions[0].date);
  const [selectedTime, setSelectedTime] = useState(timeOptions[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container size="lg" p={30}>
      <Grid>
        <Grid.Col span={7} mr={50}>
          <Title order={2}>Sink Repair</Title>
          <Title order={6} fw="normal">
            by{" "}
            <Text component="span" c={"blue"}>
              Manjit Sharma
            </Text>
          </Title>
          <Swiper
            style={{ padding: "10px 0" }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <SwiperSlide key={index}>
                <Image
                  src="https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/service/66867b87656e8bd02d5077e9.webp"
                  style={{ borderRadius: "10px" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid.Col>
        <Grid.Col
          span={4}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Title>Book a service</Title>
            <Group>
              <Text>Price</Text>
              <Text>From Rs 1500</Text>
            </Group>
            <Group>
              <Title>Select Date</Title>
              <Text>Wed, Sep 18</Text>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {dateOptions.map((option) => (
                  <button
                    key={option.date}
                    style={{
                      cursor: "pointer",
                      minHeight: "70px",
                      width: "40px",
                      border: "1px solid gray",
                      borderColor:
                        selectedDate == option.date ? "#1864AB" : "gray",
                      backgroundColor:
                        selectedDate == option.date ? "#1864AB" : "gray",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "100vw",
                    }}
                    onClick={() => setSelectedDate(option.date)}
                  >
                    <Text fz="sm">{option.day}</Text>
                    <Text fz="sm">{option.date}</Text>
                  </button>
                ))}
              </div>
            </Group>
            <Group>
              <Title>Choose a time period</Title>
              <Text>Team will arrive within the selected time</Text>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {timeOptions.map((option) => (
                  <Text
                    fz="md"
                    onClick={() => setSelectedTime(option)}
                    style={{
                      color: "white",
                      padding: "0 15px",
                      cursor: "pointer",
                      border: "1px solid gray",
                      borderColor: selectedTime == option ? "#1864AB" : "gray",
                      backgroundColor:
                        selectedTime == option ? "#1864AB" : "gray",
                      borderRadius: "100vw",
                    }}
                  >
                    {option}
                  </Text>
                ))}
              </div>
            </Group>
            <Button fullWidth my="lg" size="lg" type="submit">
              Book Now
            </Button>
          </form>
        </Grid.Col>
      </Grid>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
        dignissimos?
      </Text>
    </Container>
  );
}

export default ServiceDetail;

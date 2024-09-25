import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  Text,
  Title,
  Rating,
} from "@mantine/core";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";

function ServiceDetail() {
  const isMobileScreen = window.innerWidth <= 768;
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
    console.log("date: ", selectedDate, "\nTime:", selectedTime);
  };

  return (
    <>
      <Header />
      <Container size="lg" p={30}>
        <Grid>
          <Grid.Col span={isMobileScreen ? 12 : 7} mr={50}>
            <Title order={2}>Sink Repair</Title>
            <Title order={6} fw="normal">
              by{" "}
              <Text component="span" c={"blue"}>
                Manjit Sharma
              </Text>
            </Title>
            <Swiper
              style={{
                padding: "10px 0",
                color: "white",
                textShadow: "0 0 10px 10px black",
              }}
              pagination={{
                type: "fraction",
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
            span={isMobileScreen ? 12 : 4}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Title>Book a service</Title>
              <Group>
                <Rating value={2} size="lg" readOnly />
                <Text size="md">{2}</Text>
              </Group>
              <Group>
                <Text>Price</Text>
                <Text>From Rs 1500</Text>
              </Group>
              <Group>
                <Title>Select Date</Title>
                <Text>Wed, Sep 18</Text>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {dateOptions.map((option) => (
                    <span
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
                    </span>
                  ))}
                </div>
              </Group>
              <Group>
                <Title>Choose a time period</Title>
                <Text>Team will arrive within the selected time</Text>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {timeOptions.map((option, index) => (
                    <Text
                      key={index}
                      fz="md"
                      onClick={() => setSelectedTime(option)}
                      style={{
                        color: "white",
                        padding: "0 15px",
                        cursor: "pointer",
                        border: "1px solid gray",
                        borderColor:
                          selectedTime == option ? "#1864AB" : "gray",
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
        <Text mt="lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
          dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores, totam. Earum, unde. Aliquam veniam, temporibus deserunt,
          nostrum placeat illum totam nemo ducimus tempore laboriosam vero
          quibusdam ab ex illo nesciunt fuga sapiente at? Cum amet harum modi
          similique voluptate totam quis voluptates impedit dolorem asperiores
          eaque, est et veniam officia consectetur nam pariatur molestiae!
          Dolore praesentium, eaque reiciendis perspiciatis placeat accusamus
          dolorem nemo? Nemo cupiditate quisquam aspernatur commodi autem,
          voluptas enim blanditiis eveniet ut quia cumque, adipisci, ducimus ad
          possimus? Perspiciatis quaerat quisquam voluptatem laborum dolorem quo
          recusandae. Totam voluptatibus nihil provident tenetur dignissimos at
          neque dolorem quam impedit aliquid?
        </Text>
      </Container>
      <Footer />
    </>
  );
}

export default ServiceDetail;

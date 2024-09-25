import { Container, SimpleGrid, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CardComponent from "../../Components/CardComponent/CardComponent";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";

function Search() {
  // const [services, setServices] = useState([]);
  const services = [
    {
      slug: "sink-repair",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/service/66867b87656e8bd02d5077e9.webp",
      title: "You've won a million dollars in cash!",
      provider: "Jane's Plumbing",
      cost: 1500,
      description:
        "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
    },
    {
      slug: "tap-repair",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/service/66867b87656e8bd02d5077e9.webp",
      title: "You've won a million dollars in cash!",
      provider: "Jane's Plumbing",
      cost: 1500,
      description:
        "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
    },
    {
      slug: "floor-repair",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/service/66867b87656e8bd02d5077e9.webp",
      title: "You've won a million dollars in cash!",
      provider: "Jane's Plumbing",
      cost: 1500,
      description:
        "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
    },
    {
      slug: "room-repair",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/service/66867b87656e8bd02d5077e9.webp",
      title: "You've won a million dollars in cash!",
      provider: "Jane's Plumbing",
      cost: 1500,
      description:
        "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
    },
    {
      slug: "bed-repair",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/service/66867b87656e8bd02d5077e9.webp",
      title: "You've won a million dollars in cash!",
      provider: "Jane's Plumbing",
      cost: 1500,
      description:
        "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
    },
    {
      slug: "toy-repair",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/service/66867b87656e8bd02d5077e9.webp",
      title: "You've won a million dollars in cash!",
      provider: "Jane's Plumbing",
      cost: 1500,
      description:
        "Please click anywhere on this card to claim your reward, this is not a fraud, trust us",
    },
  ];
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const query = param.get("q");
  return (
    <>
      <Header />
      <Container size="lg">
        <Title order={2} fw="normal" my="md">
          Available Results for{" "}
          <Text component="span" fw="bold" fz="h2">
            “{query}”
          </Text>
        </Title>
        {services.length > 0 ? (
          <>
            <Title order={3} fw="normal" my="md">
              Services
            </Title>
            <SimpleGrid
              cols={{ base: 1, md: 4 }}
              spacing="lg"
              verticalSpacing="lg"
            >
              {services.map((data, index) => (
                <CardComponent key={index} data={data} />
              ))}
            </SimpleGrid>
          </>
        ) : (
          <Text fz="lg">No Results Were Found!</Text>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Search;

import { Container, SimpleGrid, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";

function Category() {
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
  const { slug } = useParams();

  return (
    <>
      <Header />
      <Container size="lg">
        <Title order={3} fw="normal" my="md">
          Services
        </Title>
        <SimpleGrid cols={{ base: 1, md: 4 }} spacing="lg" verticalSpacing="lg">
          {services.map((data, index) => (
            <CardComponent
              key={index}
              component={Link}
              to={`/service/${data.slug}`}
              data={data}
            />
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
}

export default Category;

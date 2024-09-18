import { Container, SimpleGrid, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import { useParams } from "react-router-dom";

function Category() {
  const [services, setServices] = useState([1, 2, 3, 4, 5]);
  const { slug } = useParams();
  console.log(slug);
  return (
    <Container size="lg">
      <Title order={3} fw="normal" my="md">
        Services
      </Title>
      <SimpleGrid cols={{ base: 1, md: 4 }} spacing="lg" verticalSpacing="lg">
        {services.map((_, index) => (
          <CardComponent key={index} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Category;

import { Container, SimpleGrid, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CardComponent from "../../Components/CardComponent/CardComponent";

function Search() {
  const [services, setServices] = useState([]);
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const query = param.get("q");
  return (
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
            {[1, 2, 3, 4, 5].map((_, index) => (
              <CardComponent key={index} />
            ))}
          </SimpleGrid>
        </>
      ) : (
        <Text fz="lg">No Results Were Found!</Text>
      )}
    </Container>
  );
}

export default Search;

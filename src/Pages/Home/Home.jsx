import {
  Image,
  Container,
  Title,
  Text,
  Input,
  Flex,
  Anchor,
  Pill,
  Card,
  Group,
  SimpleGrid,
} from "@mantine/core";
import classes from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Carousel from "../../Components/Carousel/Carousel";
import landingImageSvg from "../../assets/landingBanner.svg";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Book <span className={classes.highlight}>Home</span> Service
            <br />
            Providers at your fingertips
          </Title>
          <Text c="dimmed" mt="md" size="lg">
            Search, compare and match with Service Providers of your choice in
            60 Seconds
          </Text>
          <form onSubmit={handleSearch}>
            <Input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Try 'plumbing'"
              radius="lg"
              size="lg"
              mt="lg"
            />
          </form>
          <Flex align="center" gap="sm">
            <p>Popular searches:</p>
            <Flex gap="xs">
              <Anchor component={Link} to="/search?q=Eletrician">
                <Pill>Eletrician</Pill>
              </Anchor>
              <Anchor component={Link} to="/search?q=Plumber">
                <Pill>Plumber</Pill>
              </Anchor>
              <Anchor component={Link} to="/search?q=Painter">
                <Pill>Painter</Pill>
              </Anchor>
            </Flex>
          </Flex>
        </div>
        <Image src={landingImageSvg} className={classes.image} />
      </div>
      <div>
        <h2>Browse by Category</h2>
        <SimpleGrid cols={{ base: 2, md: 5 }} spacing="xs" verticalSpacing="xs">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((card, index) => (
            <Card
              key={index}
              w={{ md: 200 }}
              component={Link}
              to={`/category/${card}`}
              style={{ backgroundColor: "transparent" }}
            >
              <Card.Section>
                <Image
                  src="https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/service/66867b87656e8bd02d5077e9.webp"
                  radius="lg"
                  alt="category"
                />
              </Card.Section>

              <Title c="dimmed" fz="lg" align="center" mt="xs"> 
                Plumbing
              </Title>
            </Card>
          ))}
        </SimpleGrid>
      </div>
      <Carousel label="Featured Services" />
      <Carousel label="Popular Services" />
    </Container>
  );
}

export default Home;

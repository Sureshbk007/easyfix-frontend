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
} from "@mantine/core";
import classes from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Carousel from "../../Components/Carousel/Carousel";
import landingImageSvg from "../../assets/landingBanner.svg";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
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
        <h1>Browse by Category</h1>
        <Group gap="md">
          {[1, 2, 3, 4, 5].map((card, index) => (
            <Card
              key={index}
              w={200}
              component={Link}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              style={{ backgroundColor: "transparent" }}
            >
              <Card.Section>
                <Image
                  src="https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/service/66867b87656e8bd02d5077e9.webp"
                  h={200}
                  w={200}
                  radius="lg"
                  alt="No way!"
                />
              </Card.Section>

              <Title c="dimmed" size="xs" align="center" mt="xs">
                Plumbing
              </Title>
            </Card>
          ))}
        </Group>
      </div>
      <Carousel />
      <Carousel />
    </Container>
  );
}

export default Home;

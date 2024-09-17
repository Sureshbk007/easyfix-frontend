import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  Anchor,
} from "@mantine/core";
import classes from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image
          src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
          className={classes.mobileImage}
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Anchor component={Link}>
            <Button
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
            >
              Get back to home page
            </Button>
          </Anchor>
        </div>
        <Image
          src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
          className={classes.desktopImage}
        />
      </SimpleGrid>
    </Container>
  );
}

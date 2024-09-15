import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Register now!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{" "}
        <Link to="/login">
          <Anchor size="sm" component="button">
            Login
          </Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="ram@gmail.com" required />
        <TextInput
          label="Full Name"
          placeholder="Ram bahadur"
          mt="md"
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Button fullWidth mt="xl">
          Register
        </Button>
      </Paper>
    </Container>
  );
}

import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import classes from "./ServiceProviderRegister.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/userSlice";

export default function ServiceProviderRegister() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleRegister = () => {
    dispatch(
      registerUser({
        name,
        businessName,
        email,
        password,
        role: "serviceProvider",
      })
    );
  };

  return (
    <Container size={420} my={20}>
      <Title ta="center" className={classes.title}>
        Become a Service Provider Today!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{" "}
        <Anchor size="sm" component={Link} to="/login">
          Login
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Full Name"
          placeholder="Ram bahadur"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextInput
          label="Business Name"
          placeholder="Ram's Plumbing"
          mt="md"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
        />
        <TextInput
          label="Email"
          placeholder="ram@gmail.com"
          mt="md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          mt="md"
        />
        {error && (
          <Alert color="red" mt="md">
            {error}
          </Alert>
        )}
        <Button fullWidth mt="xl" loading={loading} onClick={handleRegister}>
          Register
        </Button>
      </Paper>
    </Container>
  );
}

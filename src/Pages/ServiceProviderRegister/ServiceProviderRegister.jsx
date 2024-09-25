import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Alert,
} from "@mantine/core";
import classes from "./ServiceProviderRegister.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/userSlice";
import { useForm } from "@mantine/form";

export default function ServiceProviderRegister() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const form = useForm({
    initialValues: {
      name: "",
      businessName: "",
      email: "",
      password: "",
    },

    validate: {
      name: (value) =>
        value.length >= 2 ? null : "Full Name must be at least 2 characters",
      businessName: (value) =>
        value.length >= 2
          ? null
          : "Business Name must be at least 2 characters",
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Invalid email format",
      password: (value) =>
        value.length >= 6
          ? null
          : "Password must be at least 6 characters long",
    },
  });

  const handleRegister = (values) => {
    dispatch(
      registerUser({
        ...values,
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
        <form onSubmit={form.onSubmit((values) => handleRegister(values))}>
          <TextInput
            label="Full Name"
            placeholder="Ram Bahadur"
            {...form.getInputProps("name")}
            error={form.errors.name}
          />
          <TextInput
            label="Business Name"
            placeholder="Ram's Plumbing"
            mt="md"
            {...form.getInputProps("businessName")}
            error={form.errors.businessName}
          />
          <TextInput
            label="Email"
            placeholder="ram@gmail.com"
            mt="md"
            {...form.getInputProps("email")}
            error={form.errors.email}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            {...form.getInputProps("password")}
            error={form.errors.password}
            mt="md"
          />
          {error && (
            <Alert color="red" mt="md">
              {error}
            </Alert>
          )}
          <Button type="submit" fullWidth mt="xl" loading={loading}>
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

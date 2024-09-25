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
import classes from "./Register.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/userSlice";
import { useForm } from "@mantine/form";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";

export default function Register() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validate: {
      name: (value) =>
        value.length >= 2 ? null : "Name must be at least 2 characters long",
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Invalid email format",
      password: (value) =>
        value.length >= 6
          ? null
          : "Password must be at least 6 characters long",
    },
  });

  const handleRegister = (values) => {
    dispatch(registerUser(values));
  };

  return (
    <>
      <Header />
      <Container size={420} my={50}>
        <Title ta="center" className={classes.title}>
          Register now!
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
              label="Email"
              placeholder="ram@gmail.com"
              mt="md"
              {...form.getInputProps("email")}
              error={form.errors.email}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              {...form.getInputProps("password")}
              error={form.errors.password}
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
      <Footer />
    </>
  );
}

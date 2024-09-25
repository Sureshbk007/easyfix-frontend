import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Alert,
} from "@mantine/core";
import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/userSlice";
import { useForm } from "@mantine/form";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Invalid email format",
      password: (value) =>
        value.length >= 6
          ? null
          : "Password must be at least 6 characters long",
    },
  });

  const handleLogin = (values) => {
    dispatch(loginUser(values)).then((resultAction) => {
      if (loginUser.fulfilled.match(resultAction)) {
        navigate("/");
      }
    });
  };

  return (
    <>
      <Header />
      <Container size={420} my={50}>
        <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
          <Title ta="center" className={classes.title}>
            Welcome back!
          </Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Do not have an account yet?{" "}
            <Anchor size="sm" component={Link} to="/register">
              Create account
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="Email"
              placeholder="you@mantine.dev"
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
            <Group justify="space-between" mt="lg">
              <Anchor component={Link} size="sm" to="/forgot-password">
                Forgot password?
              </Anchor>
            </Group>
            <Button type="submit" fullWidth mt="xl" loading={loading}>
              Login
            </Button>
          </Paper>
        </form>
        <Footer />
      </Container>
    </>
  );
}

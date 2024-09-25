import {
  Group,
  Button,
  UnstyledButton,
  Text,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Flex,
} from "@mantine/core";
import logo from "../../assets/logo.png";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconUserCircle,
} from "@tabler/icons-react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/userSlice";

// const mockdata = [
//   {
//     icon: IconCode,
//     title: "Open source",
//     description: "This Pokémon’s cry is very loud and distracting",
//   },
//   {
//     icon: IconCoin,
//     title: "Free for everyone",
//     description: "The fluid of Smeargle’s tail secretions changes",
//   },
//   {
//     icon: IconBook,
//     title: "Documentation",
//     description: "Yanma is capable of seeing 360 degrees without",
//   },
//   {
//     icon: IconFingerprint,
//     title: "Security",
//     description: "The shell’s rounded shape and the grooves on its.",
//   },
//   {
//     icon: IconChartPie3,
//     title: "Analytics",
//     description: "This Pokémon uses its flying ability to quickly chase",
//   },
//   {
//     icon: IconNotification,
//     title: "Notifications",
//     description: "Combusken battles with the intensely hot flames it spews",
//   },
// ];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const isAuthenticated = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    closeDrawer(); // Close the drawer if open
  };

  // const links = mockdata.map((item) => (
  //   <UnstyledButton className={classes.subLink} key={item.title}>
  //     <Group wrap="nowrap" align="flex-start">
  //       <ThemeIcon size={34} variant="default" radius="md">
  //         <item.icon
  //           style={{ width: rem(22), height: rem(22) }}
  //           color={theme.colors.blue[6]}
  //         />
  //       </ThemeIcon>
  //       <div>
  //         <Text size="sm" fw={500}>
  //           {item.title}
  //         </Text>
  //         <Text size="xs" c="dimmed">
  //           {item.description}
  //         </Text>
  //       </div>
  //     </Group>
  //   </UnstyledButton>
  // ));

  return (
    <Box py="xs">
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link to="/">
            <img src={logo} className={classes.logo} />
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="/" className={classes.link}>
              Home
            </Link>

            <Link to="/service-register" className={classes.link}>
              Become a Pro
            </Link>
          </Group>

          <Group visibleFrom="sm">
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <Button variant="default">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign up</Button>
                </Link>
              </>
            ) : (
              <Flex gap="15px">
                <Link to="/dashboard">
                  <IconUserCircle size={35} />
                </Link>
                <Button onClick={handleLogout} bg="red">
                  Log out
                </Button>
              </Flex>
            )}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      {/* Mobile Navigations */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link to="/" className={classes.link} onClick={closeDrawer}>
            Home
          </Link>
          {/* <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton> */}
          {/* <Collapse in={linksOpened}>{links}</Collapse> */}
          <Anchor
            component={Link}
            to="/service-register"
            className={classes.link}
            onClick={closeDrawer}
          >
            Become a Pro
          </Anchor>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            {!isAuthenticated ? (
              <>
                <Anchor component={Link} to="/login">
                  <Button variant="default" onClick={closeDrawer} fullWidth>
                    Log in
                  </Button>
                </Anchor>
                <Anchor component={Link} to="register">
                  <Button onClick={closeDrawer} fullWidth>
                    Sign up
                  </Button>
                </Anchor>
              </>
            ) : (
              <Flex justify="space-between">
                <Link to="/user-dashboard">
                  <IconUserCircle size={35} />
                </Link>
                <Button onClick={handleLogout} bg="red">
                  Log out
                </Button>
              </Flex>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

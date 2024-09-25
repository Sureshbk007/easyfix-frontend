import { useState } from "react";
import {
  Center,
  Tooltip,
  UnstyledButton,
  Stack,
  rem,
  Container,
  Flex,
} from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconUsersGroup,
  IconReportAnalytics,
  IconCoin,
} from "@tabler/icons-react";
import logo from "../../assets/logo.png";
import classes from "./Dashboard.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/userSlice";

function NavbarLink({ icon: Icon, label, active, onClick }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

export default function Dashboard() {
  const [active, setActive] = useState(0);
  // const [role, setRole] = useState("user"); // Set role: 'user', 'serviceProvider', 'admin'
  const { role } = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define mockdata based on role
  const getMockdataForRole = (role) => {
    switch (role) {
      case "user":
        return [
          {
            icon: IconHome2,
            label: "Home",
            component: <div>Nothing to show there at the moment</div>,
          },
          {
            icon: IconUser,
            label: "Account",
            component: <div>hello Suresh</div>,
          },
          {
            icon: IconSettings,
            label: "Settings",
            component: <div>changes</div>,
          },
        ];
      case "serviceProvider":
        return [
          { icon: IconHome2, label: "Home" },
          { icon: IconGauge, label: "Dashboard" },
          { icon: IconCoin, label: "Earnings" },
          { icon: IconUser, label: "Profile" },
          { icon: IconSettings, label: "Settings" },
        ];
      case "admin":
        return [
          { icon: IconHome2, label: "Home" },
          { icon: IconReportAnalytics, label: "Analytics" },
          { icon: IconUsersGroup, label: "User Management" },
          { icon: IconCalendarStats, label: "Releases" },
          { icon: IconFingerprint, label: "Security" },
          { icon: IconSettings, label: "Settings" },
        ];
      default:
        return [];
    }
  };
  const mockdata = getMockdataForRole(role); // Get mockdata based on role

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Flex>
      <nav className={classes.navbar}>
        <Center>
          <Link to="/">
            <img src={logo} className={classes.logo} alt="Logo" />
          </Link>
        </Center>

        <div className={classes.navbarMain}>
          <Stack justify="center" gap={0}>
            {links}
          </Stack>
        </div>

        <Stack justify="center" gap={0}>
          <NavbarLink icon={IconLogout} label="Logout" onClick={handleLogout} />
        </Stack>
      </nav>
      <Container p={20}>{mockdata[active]?.component}</Container>
    </Flex>
  );
}

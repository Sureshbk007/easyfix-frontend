import { Container, Group, Anchor } from "@mantine/core";
import classes from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Careers" },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      component="a"
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Anchor component={Link}>
          <img src={logo} />
        </Anchor>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}

import { Card, Image, Text } from "@mantine/core";

function CardComponent({ data, ...options }) {
  const { image, title, provider, cost, description } = data;

  return (
    <Card shadow="sm" {...options}>
      <Card.Section>
        <Image src={image} h={160} alt={title} />
      </Card.Section>

      <Text fw={500} size="lg" mt="md" lineClamp={1}>
        {title}
      </Text>
      <Text c="dimmed" size="xs">
        By {provider}
      </Text>
      <Text fw={500} size="lg" c="blue">
        Rs {cost}
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        {description}
      </Text>
    </Card>
  );
}

export default CardComponent;

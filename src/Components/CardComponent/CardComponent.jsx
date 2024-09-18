import { Card, Image, Text } from "@mantine/core";

function CardComponent({ ...options }) {
  return (
    <Card shadow="sm" {...options}>
      <Card.Section>
        <Image
          src="https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/service/66867b87656e8bd02d5077e9.webp"
          h={160}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md" lineClamp={1}>
        You&apos;ve won a million dollars in cash!
      </Text>
      <Text c="dimmed" size="xs">
        By Jane's Plumbing
      </Text>
      <Text fw={500} size="lg" c="blue">
        Rs 1500
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a
        fraud, trust us
      </Text>
    </Card>
  );
}

export default CardComponent;
